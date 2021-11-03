import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBlock>
      <BackContainer>
        <Back>Back</Back>
      </BackContainer>
      <hr
        style={{ backgroundColor: "#e895bc", width: "100%", height: "2px" }}
      />
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  width: 90%;
  height: 10%;
`;

const BackContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Back = styled.button`
  border-radius: 30px;
  background-color: #e895bc;
  font-size: 30px;
  color: white;
  margin-bottom: 20px;
  float: right;

  &:hover {
    background-color: #6799ff;
  }
`;

export default Header;
