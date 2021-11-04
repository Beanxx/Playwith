import React, { useState } from "react";
import back_ground from "./image/birthday_cake.jpg";
import styled from "styled-components";

<img src={back_ground} resizeMode="cover" alt="profile" />;
function SignupPage() {
  return (
    <div>
      <Container>
        <Box>
          <Title>Sign Up</Title>
          <Input placeholder="ID"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Input placeholder="Email Address"></Input>
          <Input placeholder="Phone Number"></Input>
          <Input placeholder="Full Name"></Input>
          <Content>
            <Checkbox type="checkbox"></Checkbox>I accept The Terms of
          </Content>
          <LineButton>Use&Privacy Policy</LineButton>
          <Button>Create Account</Button>
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

const Title = styled.h1`
  color: #e895bc;
  font-size: 50px;
`;

const Content = styled.div`
  color: #e895bc;
  font-size: 17px;
`;

const Input = styled.input`
  width: 70%;
  height: 30px;
  background-color: rgba(232, 149, 188, 0.21);
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  margin: 5px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const Button = styled.button`
  width: 70%;
  height: 50px;
  background-color: #e895bc;
  border-radius: 50px;
  border-width: 0px;
  margin: 10px;
  padding: 5px;
  color: white;
  font-size: 20px;
`;

const LineButton = styled.div`
  margin: 10px;
  padding: 5px;
  color: #e870a9;
  font-size: 17px;
  border-color: white;
  text-decoration: underline;
`;

export default SignupPage;
