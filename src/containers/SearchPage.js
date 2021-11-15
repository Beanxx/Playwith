import React from "react";
import styled from "styled-components";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";

function RoomSearch() {
  return (
    <HomeTemplate>
      <Header />
      <Title>파티룸 탐색</Title>
    </HomeTemplate>
  );
}

const Title = styled.h1`
  color: #e895bc;
  font-size: 40px;
`;

export default RoomSearch;
