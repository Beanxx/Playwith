import React, {useState} from "react";
import styled from "styled-components";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsCameraVideoOffFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { IoColorWand } from "react-icons/io5";

const RoomMenu = () => {
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);

  const handleMic = () => {
    setMic(!mic);
  };

  const handleCamera = () => {
    setCamera(!camera);
  };

  return (
    <div>
      <Box>
        <div className="mic" onClick={handleMic}>
          {mic ? (
            <BsFillMicFill/>
          ) : (
            <BsFillMicMuteFill/>
          )}
        </div>
        <div className="camera" onClick={handleCamera}>
          {camera ? (
            <BsCameraVideoFill/>
          ) : (
            <BsCameraVideoOffFill/>
          )}
        </div>
        <IoGameController className="game"/>
        <IoColorWand className="filter"/>
        <BsFillEmojiSmileFill className="emoji"/>
        <ImExit className="exit"/>
      </Box>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  float: left;
  width: 110px;
  height: 550px;
  margin-top: 80px;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 50px;
  color: #b393ec;

  .mic:hover {
    color: #4A148C;
  }

  .camera:hover {
    color: #4A148C;
  }

  .game:hover {
    color: #4A148C;
  }

  .filter:hover {
    color: #4A148C;
  }

  .emoji:hover {
    color: #4A148C;
  }

  .exit:hover {
    color: #4A148C;
  }
`;


export default RoomMenu;
