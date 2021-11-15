import React from "react";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <HeaderBlock>
      <div style={{ display: "flex" }}>
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
        <Title>{children}</Title>
      </div>
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

const Title = styled.h1`
  color: #e895bc;
  font-size: 40px;
  margin: 0 auto;
`;

const HeaderBlock = styled.div`
  width: 90%;
`;

export default Header;
