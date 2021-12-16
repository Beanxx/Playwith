import React, { useState } from "react";
import back_ground from "../image/party.jpg";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router";

function Login({ history }) {
  // const history = useHistory();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const login = () => {
    axios
      .post("http://localhost:3001/api/login", {
        user_id: id,
        user_pw: pw,
      })
      .then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          if (response.data.message === "Success") {
            alert("success");
            history.push("/home");
            sessionStorage.setItem("user_id", id);
          } else {
            alert("fail");
          }
        } else {
          setLoginStatus(response.data[0].user_id);
        }
        // history.push("/home");
      });
  };

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
          <Title>Sign In</Title>
          <LoginContainer>
            <Content>ID</Content>
            <Input
              name="user_id"
              type="text"
              defaultValue={id}
              onChange={onChangeId}
              placeholder="ID"
            />
          </LoginContainer>
          <LoginContainer>
            <Content>Password</Content>
            <Input
              name="user_password"
              type="password"
              defaultValue={pw}
              onChange={onChangePw}
              placeholder="Password"
            />
          </LoginContainer>
          <Button onClick={login}>Submit</Button>
          {loginStatus}
          <LineButtonContainer>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <LineButton>Sign Up</LineButton>
            </Link>
            <Link to="/forgot" style={{ textDecoration: "none" }}>
              <LineButton>Forgot ID or Password?</LineButton>
            </Link>
          </LineButtonContainer>
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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.h1`
  color: #e895bc;
  font-size: 50px;
`;

const Content = styled.div`
  color: #e895bc;
  font-size: 18px;
  font-weight: 500;
  margin: 10px;
`;

const Input = styled.input`
  width: 97%;
  height: 30px;
  background-color: #f4d8e6;
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  font-size: 20px;
  padding-left: 10px;
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

const LineButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LineButton = styled.button`
  margin: 10px;
  color: #e895bc;
  font-size: 21px;
  border: none;
  text-decoration: underline;

  &:hover {
    color: #6799ff;
  }
`;

export default withRouter(Login);
