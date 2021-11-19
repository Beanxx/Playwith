import React from "react";
import styled from "styled-components";
import { BsFillMicFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";

const RoomMenu = () => {
  return (
    <div>
      <Box>
        <BsFillMicFill />
        <BsCameraFill />
        <IoGameController />
        <BsFillEmojiSmileFill />
        <ImExit />
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
`;
export default RoomMenu;
