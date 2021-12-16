import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";
import SignupPage from "./SignupPage";

function Home() {
  return (
    <HomeTemplate>
      <Header />
      <Greet>님 환영합니다.</Greet>
      <SelectContainer>
        <SelectBox>
          <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
            파티룸 생성
          </Link>
        </SelectBox>
        <SelectBox>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            파티룸 탐색
          </Link>
        </SelectBox>
      </SelectContainer>
    </HomeTemplate>
  );
}

const Greet = styled.h1`
  font-size: 40px;
  color: #5d5d5d;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 55%;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 90%;
  border-radius: 30px;
  background-color: #e895bc;
  font-size: 50px;
  color: white;

  &:hover {
    background-color: #6799ff;
  }
`;

export default Home;
