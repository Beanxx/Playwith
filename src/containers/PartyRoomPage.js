import React from "react";
import styled from "styled-components";
import back_ground from "../image/normal_theme.jpg";
import RoomMenu from "../components/RoomMenu";

function PartyRoom({ children }) {
  return (
    <div>
      <Container>
        <RoomMenu />
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

export default PartyRoom;
