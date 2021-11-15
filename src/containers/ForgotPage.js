import React, { Component } from "react";
import styled from "styled-components";
import "../style.css";
import back_ground from "../image/birthday_cake.jpg";
import FindID from "../components/FindID";
import FindPW from "../components/FindPW";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

<img src={back_ground} resizeMode="cover" alt="forgot_id" />;

const menuList = {
  0: <FindID />,
  1: <FindPW />,
};

class ForgotPage extends Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <div className="wrap">
        <Container>
          <Box>
            <Header>
              <Link to="/" style={{ textDecoration: "none", color: "#6799ff" }}>
                <BsArrowLeftShort />
              </Link>
            </Header>
            <MenuBar>
              <nav>
                <ul className="tabs">
                  <MenuTab
                    className={`${this.state.menu === 0 ? "active" : ""}`}
                    onClick={() => this.changeMenu(0)}
                  >
                    ID
                  </MenuTab>
                  <MenuTab
                    className={`${this.state.menu === 1 ? "active" : ""}`}
                    onClick={() => this.changeMenu(1)}
                  >
                    Password
                  </MenuTab>
                </ul>
              </nav>
            </MenuBar>
            <Outline>{menuList[this.state.menu]}</Outline>
          </Box>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${back_ground});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 80%;
  margin-top: 70px;
  margin-left: 70px;
  border-radius: 30px;
  opacity: 0.9;
  background-color: white;
`;

const MenuBar = styled.div`
  margin: 0 auto 0 auto;
  width: 520px;
`;

const Outline = styled.div`
  width: 80%;
  height: 50%;
  border: 5px solid #e895bc;
  text-align: center;
`;

const MenuTab = styled.li`
  list-style: none;
  float: left;
  width: 100px;
  padding: 10px 15px;
  text-align: center;
  color: #e895bc;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: 3px solid #e895bc;
`;

const Header = styled.div`
  font-size: 70px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export default ForgotPage;
