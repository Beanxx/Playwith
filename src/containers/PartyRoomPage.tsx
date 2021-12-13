import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import back_ground from "../image/normal_theme.jpg";
import RoomMenu from "../components/RoomMenu";
import io from "socket.io-client";
import Video from "../components/video"; //css 담겨있음
import { WebRTCUser } from "../types";

const pc_config = {
  iceServers: [
    // {
    //   urls: 'stun:[STUN_IP]:[PORT]',
    //   'credentials': '[YOR CREDENTIALS]',
    //   'username': '[USERNAME]'
    // },
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
const SOCKET_SERVER_URL = "http://localhost:8080";

const PartyRoomPage = () => {
  //container의 partyroompage.js에 해당하는 듯
  const socketRef = useRef<SocketIOClient.Socket>();
  const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({}); //상대방의 rtcpeerconnection 저장할 dictionary 변수
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream>();
  const [users, setUsers] = useState<WebRTCUser[]>([]); //users: 상대방의 데이터(socket id, email, mediastream) 배열

  const getLocalStream = useCallback(async () => {
    //localstream 받아오기
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        //navigator.mediaDevices.getUserMedia() 함수를 호출해서 자신의 MediaStream을 얻고
        audio: true,
        video: {
          width: 240,
          height: 240,
        },
      });
      localStreamRef.current = localStream;
      if (localVideoRef.current) localVideoRef.current.srcObject = localStream; //localVideoRef에 등록
      if (!socketRef.current) return;
      socketRef.current.emit("join_room", {
        //방에 참가했다고 Signaling Server에 알린다.
        room: "1234",
        email: "sample@naver.com",
      });
    } catch (e) {
      console.log(`getUserMedia error: ${e}`);
    }
  }, []);

  const createPeerConnection = useCallback(
    (socketID: string, email: string) => {
      try {
        const pc = new RTCPeerConnection(pc_config);

        pc.onicecandidate = (e) => {
          //offer 또는 answer signal을 생성한 후부터 본인의 icecadidate 정보 이벤트가 발생
          if (!(socketRef.current && e.candidate)) return;
          console.log("onicecandidate");
          socketRef.current.emit("candidate", {
            //offer 또는 answer를 보냈던 상대방에게 본인의 icecandidate 정보를 Signaling Server를 통해 보낸다.
            candidate: e.candidate,
            candidateSendID: socketRef.current.id,
            candidateReceiveID: socketID,
          });
        };

        pc.oniceconnectionstatechange = (e) => {
          //ICE connection 상태가 변경됐을 때의 log
          console.log(e);
        };

        pc.ontrack = (e) => {
          console.log("ontrack success");
          setUsers((oldUsers) =>
            oldUsers
              .filter((user) => user.id !== socketID)
              .concat({
                id: socketID,
                email,
                stream: e.streams[0],
              })
          );
        };

        if (localStreamRef.current) {
          console.log("localstream add");
          localStreamRef.current.getTracks().forEach((track) => {
            if (!localStreamRef.current) return;
            pc.addTrack(track, localStreamRef.current);
          });
        } else {
          console.log("no local stream");
        }

        return pc;
      } catch (e) {
        console.error(e);
        return undefined;
      }
    },
    []
  );

  useEffect(() => {
    socketRef.current = io.connect(SOCKET_SERVER_URL);
    getLocalStream();

    socketRef.current.on(
      "all_users",
      (allUsers: Array<{ id: string; email: string }>) => {
        //자신을 제외한 같은 방의 모든 user 목록을 받아온다.
        allUsers.forEach(async (user) => {
          //각 user들 마다
          if (!localStreamRef.current) return;
          const pc = createPeerConnection(user.id, user.email); //createPeerConnection 함수를 호출해서 각각의 RTCPeerConnection을 생성
          if (!(pc && socketRef.current)) return;
          pcsRef.current = { ...pcsRef.current, [user.id]: pc };
          try {
            const localSdp = await pc.createOffer({
              //해당 user를 위해 생성한 RTCPeerConneciton을 통해 createOffer 함수를 호출
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            });
            console.log("create offer success");
            await pc.setLocalDescription(new RTCSessionDescription(localSdp));
            socketRef.current.emit("offer", {
              //해당 user에게만 offer signal 보냄
              sdp: localSdp,
              offerSendID: socketRef.current.id,
              offerSendEmail: "offerSendSample@sample.com",
              offerReceiveID: user.id,
            });
          } catch (e) {
            console.error(e);
          }
        });
      }
    );

    socketRef.current.on(
      //offer를 보낸 user와의 통신을 위해
      "getOffer",
      async (data: {
        sdp: RTCSessionDescription;
        offerSendID: string;
        offerSendEmail: string;
      }) => {
        const { sdp, offerSendID, offerSendEmail } = data;
        console.log("get offer");
        if (!localStreamRef.current) return;
        const pc = createPeerConnection(offerSendID, offerSendEmail); //createPeerConnection 함수를 호출해서 rtcpeerConnection 생성
        if (!(pc && socketRef.current)) return;
        pcsRef.current = { ...pcsRef.current, [offerSendID]: pc };
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(sdp)); //해당 user를 위해 생성한 RTCPeerConnection의 remoteDescription를 해당 user에게서 전달 받은 sdp로 설정
          console.log("answer set remote description success");
          const localSdp = await pc.createAnswer({
            offerToReceiveVideo: true,
            offerToReceiveAudio: true,
          });
          await pc.setLocalDescription(new RTCSessionDescription(localSdp));
          socketRef.current.emit("answer", {
            //createAnswer 함수를 호출하고 해당 user에게 answer signal을 보낸다.
            sdp: localSdp,
            answerSendID: socketRef.current.id,
            answerReceiveID: offerSendID,
          });
        } catch (e) {
          console.error(e);
        }
      }
    );

    socketRef.current.on(
      //answer을 보낸 user를 위해 생성해놓은 RTCPeerConnection의 remoteDescription를 answer을 보낸 user의 sdp로 설정
      "getAnswer",
      (data: { sdp: RTCSessionDescription; answerSendID: string }) => {
        const { sdp, answerSendID } = data;
        console.log("get answer");
        const pc: RTCPeerConnection = pcsRef.current[answerSendID];
        if (!pc) return;
        pc.setRemoteDescription(new RTCSessionDescription(sdp));
      }
    );

    socketRef.current.on(
      //candidate를 보낸 user를 위해 생성해놓은 RTCPeerConnection에 받은 RTCIceCandidate를 추가
      "getCandidate",
      async (data: {
        candidate: RTCIceCandidateInit;
        candidateSendID: string;
      }) => {
        console.log("get candidate");
        const pc: RTCPeerConnection = pcsRef.current[data.candidateSendID];
        if (!pc) return;
        await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        console.log("candidate add success");
      }
    );

    socketRef.current.on("user_exit", (data: { id: string }) => {
      //pcsRef Dictionary에서 해당 user의 RTCPeerConnection을 삭제
      if (!pcsRef.current[data.id]) return;
      pcsRef.current[data.id].close();
      delete pcsRef.current[data.id]; //users에서 해당 user의 데이터를 삭제
      setUsers((oldUsers) => oldUsers.filter((user) => user.id !== data.id));
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      users.forEach((user) => {
        if (!pcsRef.current[user.id]) return;
        pcsRef.current[user.id].close();
        delete pcsRef.current[user.id];
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPeerConnection, getLocalStream]);

  return (
    <div>
      <Container>
        <RoomMenu />
        <video
          style={{
            width: 240,
            height: 240,
            margin: 5,
            position: "absolute",
            top: 230,
            left: 230,
            backgroundColor: "black",
          }}
          muted
          ref={localVideoRef}
          autoPlay
        />
        {users.map((user, index) => (
          <Video key={index} email={user.email} stream={user.stream} />
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${back_ground});
  background-size: cover;
`;

export default PartyRoomPage;
