import React, { Component } from "react";
import styled from "styled-components";
import '../style.css';


class FindPW extends Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div>
              <form>
                <Content>
                <Input placeholder="Full Name"></Input>
                </Content>
                <Content>
                <Input placeholder="ID"></Input>
                </Content>
                <Content>
                <Button>Next</Button>
                </Content>
              </form>
            </div>
        )
    }
  }

  const Content = styled.div`
  padding-top: 50px;
  padding-left: 5%;
  `;
  
  const Input = styled.input`
  width: 80%;
  height: 30px;
  background-color: rgba(232, 149, 188, 0.21);
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
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

  export default FindPW;
  