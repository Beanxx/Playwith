import React from "react";
import back_ground from "../image/birthday_cake.jpg";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

<img src={back_ground} resizeMode="cover" alt="profile" />;
function SignupPage() {
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
  width: 70%;
  height: 30px;
  background-color: rgba(232, 149, 188, 0.21);
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  margin: 5px;
  padding-left: 15px;
  margin: 7px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const Button = styled.button`
  width: 70%;
  height: 40px;
  background-color: #e895bc;
  border-radius: 50px;
  border-width: 0px;
  margin: 10px;
  padding: 5px;
  color: white;
  font-size: 20px;
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

export default SignupPage;