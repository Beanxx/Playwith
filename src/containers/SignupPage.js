import React, { useState, useCallback } from "react";
import back_ground from "../image/birthday_cake.jpg";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

function SignupPage({ history }) {
  const [idReg, setIdReg] = useState("");
  const [pwReg, setPwReg] = useState("");
  const [pwConfirmReg, setPwConfirm] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  //오류메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  // const router = useRouter();

  const register = () => {
    axios
      .post("http://localhost:3001/api/register", {
        user_id: idReg,
        user_pw: pwReg,
        user_email: emailReg,
        user_name: nameReg,
        user_phone: phoneReg,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("회원가입에 성공하였습니다.");
          console.log(response.data.message);
          // return history.push("/");
        } else {
          alert("회원가입에 실패하였습니다.");
          console.log(response);
        }
      });
  };

  // 아이디 유효성검사
  const onChangeId = useCallback((e) => {
    setIdReg(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 11) {
      setIdMessage("5~10 사이의 글자를 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 ID입니다.");
      setIsId(true);
    }
  }, []);

  // 비밀번호 유효성검사
  const onChangePw = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPwReg(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("사용가능한 비밀번호입니다.");
      setIsPw(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePwConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPwConfirm(passwordConfirmCurrent);

      if (pwReg === passwordConfirmCurrent) {
        setPwConfirmMessage("비밀번호가 일치합니다.");
        setIsPwConfirm(true);
      } else {
        setPwConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPwConfirm(false);
      }
    },
    [pwReg]
  );

  // 이메일 유효성 검사
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmailReg(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 옳지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("사용가능한 이메일입니다.");
      setIsEmail(true);
    }
  }, []);

  // 이름 유효성검사
  const onChangeName = useCallback((e) => {
    setNameReg(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 11) {
      setNameMessage("1~10 사이의 글자를 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
    }
  }, []);

  // 폰번호 유효성 검사
  const onChangePhone = useCallback((e) => {
    const phoneRegex = /^01(?:0|1|[6-9])\d{8}$/;
    const phoneCurrent = e.target.value;
    setPhoneReg(phoneCurrent);

    if (!phoneRegex.test(phoneCurrent)) {
      setPhoneMessage("휴대폰번호 형식이 옳지 않습니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("올바른 휴대폰번호 형식입니다.");
      setIsPhone(true);
    }
  }, []);

  return (
    <div>
      <Container>
        <LogoContainer>
          <Explain>
            <Logo>PlayWith</Logo>
            Now
            <br />
            Let's enjoy the online
            <br />
            party with your friend
          </Explain>
        </LogoContainer>
        <Box>
          <Header>
            <Link to="/" style={{ textDecoration: "none", color: "#6799ff" }}>
              <BsArrowLeftShort />
            </Link>
            <Title>Sign Up</Title>
          </Header>
          <InnerBox>
            <Input
              type="text"
              defaultValue={idReg}
              onChange={onChangeId}
              placeholder="ID"
            />
            {idReg.length > 0 && (
              <CheckMessage className={`message ${isId ? "success" : "error"}`}>
                {idMessage}
              </CheckMessage>
            )}
            <Input
              type="password"
              defaultValue={pwReg}
              onChange={onChangePw}
              placeholder="Password (숫자+영문자+특수문자 8자리 이상)"
            />
            {pwReg.length > 0 && (
              <CheckMessage className={`message ${isPw ? "success" : "error"}`}>
                {pwMessage}
              </CheckMessage>
            )}
            <Input
              type="password"
              defaultValue={pwConfirmReg}
              placeholder="Confirm Password"
              onChange={onChangePwConfirm}
            ></Input>
            {pwConfirmReg.length > 0 && (
              <CheckMessage
                className={`message ${isPwConfirm ? "success" : "error"}`}
              >
                {pwConfirmMessage}
              </CheckMessage>
            )}
            <Input
              type="email"
              defaultValue={emailReg}
              onChange={onChangeEmail}
              placeholder="Email Address"
            ></Input>
            {emailReg.length > 0 && (
              <CheckMessage
                className={`message ${isEmail ? "success" : "error"}`}
              >
                {emailMessage}
              </CheckMessage>
            )}
            <Input
              type="text"
              defaultValue={phoneReg}
              onChange={onChangePhone}
              placeholder="Phone Number (-를 제외한 숫자만)"
            ></Input>
            {phoneReg.length > 0 && (
              <CheckMessage
                className={`message ${isPhone ? "success" : "error"}`}
              >
                {phoneMessage}
              </CheckMessage>
            )}
            <Input
              type="text"
              defaultValue={nameReg}
              onChange={onChangeName}
              placeholder="Full Name"
            ></Input>
            {nameReg.length > 0 && (
              <CheckMessage
                className={`message ${isName ? "success" : "error"}`}
              >
                {nameMessage}
              </CheckMessage>
            )}
          </InnerBox>
          <Content>
            <Checkbox type="checkbox"></Checkbox>I accept The Terms of
          </Content>
          <LineButton>Use&Privacy Policy</LineButton>
          <Button type="submit" onClick={register}>
            Create Account
          </Button>
        </Box>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${back_ground});
  background-size: cover;
`;

const LogoContainer = styled.div`
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 80%;
  margin: 100px;
  margin-top: 50px;
  margin-left: 200px;
`;

const Explain = styled.div`
  color: white;
  font-size: 60px;
  font-style: italic;
`;

const Logo = styled.div`
  color: white;
  font-size: 90px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
`;

const Box = styled.div`
  display: flex;
  float: right;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 80%;
  margin: 50px;
  margin-top: 80px;
  margin-right: 220px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const InnerBox = styled.div`
  width: 80%;
  height: 300px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

const Title = styled.h1`
  color: #e895bc;
  font-size: 45px;
  margin-left: 40px;
`;

const Content = styled.div`
  color: #e895bc;
  font-size: 17px;
`;

const Input = styled.input`
  width: 85%;
  height: 30px;
  background-color: rgba(232, 149, 188, 0.21);
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  margin: 5px;
  padding-left: 15px;
  margin: 7px;
  font-size: 9pt;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const CheckMessage = styled.div`
  color: gray;
  font-size: 5pt;
  text-align: center;
`;

const LineButton = styled.div`
  color: #e870a9;
  font-size: 17px;
  text-decoration: underline;
  margin-bottom: 15px;
`;

const Header = styled.div`
  font-size: 50px;
  display: flex;
  width: 350px;
`;

const Button = styled.button`
  width: 70%;
  height: 45px;
  background-color: #e895bc;
  border-radius: 50px;
  border-width: 0px;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 5px;
  color: white;
  font-size: 22px;

  &:hover {
    background-color: #6799ff;
  }
`;

export default SignupPage;
