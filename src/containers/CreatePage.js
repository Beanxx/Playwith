import React from "react";
import styled from "styled-components";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";

function RoomCreate() {
  return (
    <HomeTemplate>
      <Header>파티룸 생성</Header>
      <div style={{ margin: "35px" }} />

      <InputContainer>
        <Content>TITLE</Content>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Content>PASSWORD</Content>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Content>SUBJECT</Content>
        <Select>
          <option key="default" value="default">
            일반
          </option>
          <option key="talk" value="talk">
            수다
          </option>
          <option key="game" value="game">
            게임
          </option>
          <option key="star" value="start">
            연예인
          </option>
          <option key="hobby" value="hobby">
            취미
          </option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Content>THEME</Content>
        <Select>
          <option key="normal" value="normal">
            일반
          </option>
          <option key="birthday" value="birthday">
            생일
          </option>
          <option key="halloween" value="halloween">
            할로윈
          </option>
          <option key="christmas" value="christmas">
            크리스마스
          </option>
        </Select>
      </InputContainer>
      <Button>Create</Button>
    </HomeTemplate>
  );
}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 55%;
  margin: 5px;
`;

const Content = styled.div`
  color: #e895bc;
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;

const Input = styled.input`
  width: 70%;
  background-color: #f4d8e6;
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  font-size: 18px;
  padding: 5px;
  padding-left: 10px;
  float: right;
`;

const Select = styled.select`
  width: 73%;
  background-color: #f4d8e6;
  border-radius: 15px;
  border-width: 2px;
  border-color: #e895bc;
  font-size: 15px;
  padding: 5px;
  padding-left: 10px;
  text-align: center;
`;

const Button = styled.button`
  width: 30%;
  height: 45px;
  background-color: #e895bc;
  border-radius: 50px;
  border-width: 0px;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 5px;
  color: white;
  font-size: 22px;

  &:hover {
    background-color: #6799ff;
  }
`;

export default RoomCreate;
