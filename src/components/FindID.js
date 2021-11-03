import React, { Component } from "react";
import styled from "styled-components";
import '../style.css';

class FindID extends Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div>
                <Content><input type="radio" name="auth" value="phone" checked/>휴대전화 인증</Content>
                <Content><input type="radio" name="auth" value="email"/>이메일 인증</Content>
                <Content><Button>Next</Button></Content>
            </div>
        )
    }
  }

  const Content = styled.div`
  color: #e895bc;
  font-size: 20px;
  padding-top: 50px;
  padding-left: 5%;
  `;
  
  const Button = styled.button`
  width: 20%;
  height: 10%;
  background-color: #e895bc;
  border-radius: 10px;
  border-width: 0px;
  margin: 10px;
  padding: 5px;
  color: white;
  font-size: 20px;
`;

  export default FindID;
  