import React from "react";
import back_ground from "../image/festival.jpg";
import styled from "styled-components";

const HomeTemplate = ({ children }) => {
  return (
    <HomeTemplates>
      <HomeBox>{children}</HomeBox>
    </HomeTemplates>
  );
};

const HomeTemplates = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${back_ground});
  background-size: cover;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 65%;
  height: 80%;
  border-radius: 30px;
  padding-top: 30px;
  background-color: rgba(255, 255, 255, 0.95);
`;

export default HomeTemplate;
