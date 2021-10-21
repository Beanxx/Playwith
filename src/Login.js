import React from "react";
import back_ground from "./image/party.jpg";
import styled from "styled-components";

<img src={back_ground} resizeMode="cover" alt="profile" />;
function Login() {
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
            party with your frined
          </Explain>
        </LogoContainer>
        <Box>
          <Title>Sign In</Title>
          <Content>ID</Content>
          <Input></Input>
          <Content>Password</Content>
          <Input></Input>
          <Button>Submit</Button>
          <LineButton>Sign Up</LineButton>
          <LineButton>Forgot ID or Password?</LineButton>
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

const Box = styled.div`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 80%;
  margin: 50px;
  margin-top: 130px;
  margin-right: 200px;
  border-radius: 30px;
  opacity: 0.9;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 60%;
  margin: 100px;
  margin-top: 200px;
  margin-left: 200px;
`;

const Explain = styled.div`
  color: white;
  font-size: 80px;
`;

const Logo = styled.div`
  color: white;
  font-size: 100px;
  font-weight: bold;
`;

const Title = styled.h1`
  color: #e895bc;
  font-size: 50px;
`;

const Content = styled.div`
  color: #e895bc;
  font-size: 20px;
  padding-top: 15px;
`;

const Input = styled.input`
  width: 70%;
  height: 30px;
  background-color: rgba(232, 149, 188, 0.21);
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
`;

const Button = styled.button`
  width: 70%;
  height: 50px;
  background-color: #e895bc;
  border-radius: 50px;
  border-width: 0px;
  margin: 10px;
  margin-top: 50px;
  padding: 5px;
  color: white;
  font-size: 20px;
`;

const LineButton = styled.div`
  margin: 10px;
  padding: 5px;
  color: #e895bc;
  font-size: 20px;
  border-color: white;
  text-decoration: underline;
`;

export default Login;
