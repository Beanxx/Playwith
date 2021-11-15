import React from "react";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBlock>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#6799ff",
          fontSize: "60px",
        }}
      >
        <BsArrowLeftShort />
      </Link>
      <hr
        style={{
          backgroundColor: "#e895bc",
          border: "none",
          width: "100%",
          height: "5px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  width: 90%;
`;

export default Header;
