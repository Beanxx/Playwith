import React, { useState } from "react";
import styled from "styled-components";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";
import axios from "axios";

function RoomCreate() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [isPrivate, setPrivate] = useState("");
  const [pw, setPw] = useState("");
  const [count, setCount] = useState("");
  const [theme, setTheme] = useState("");
  
  const create = () => {
    axios
      .post("http://localhost:3001/api/create", {
        room_id: id,
        room_title: title,
        room_subject: subject,
        room_private: isPrivate,
        room_pw: pw,
        room_count: count,
        room_theme: theme,
      })
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
        } else {
          console.log(res);
        }
      });
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setCount(1);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
    if (e.target.value !== null){
      setPrivate(1)
    } else {
      setPrivate(0);
    }
  };

  const onChangeSubject = (e) => {
    var target = document.getElementById("selectSubjectId");
    var val = target.options[target.selectedIndex].value;
    setSubject(val);
  }

  const onChangeTheme = (e) => {
    var target = document.getElementById("selectThemeId");
    var val = target.options[target.selectedIndex].value;
    setTheme(val);
  }

  return (
    <HomeTemplate>
      <Header>파티룸 생성</Header>
      <div style={{ margin: "35px" }} />

      <InputContainer>
        <Content>TITLE</Content>
        <Input
          defaultValue={title}
          onChange={onChangeTitle}/>
      </InputContainer>

      <InputContainer>
        <Content>PASSWORD</Content>
        <Input
          defaultValue={pw}
          onChange={onChangePw}
          />
      </InputContainer>

      <InputContainer>
        <Content>SUBJECT</Content>
        <Select
          id="selectSubjectId" 
          onChange={onChangeSubject}
          >
          <option value="일반">
            일반
          </option>
          <option value="수다">
            수다
          </option>
          <option value="게임">
            게임
          </option>
          <option value="연예인">
            연예인
          </option>
          <option value="취미">
            취미
          </option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Content>THEME</Content>
        <Select
          id="selectThemeId" 
          onChange={onChangeTheme}>
          <option key="normal" type="number" value="1">
            일반
          </option>
          <option key="birthday" type="number" value="2">
            생일
          </option>
          <option key="halloween" type="number" value="3">
            할로윈
          </option>
          <option key="christmas" type="number" value="4">
            크리스마스
          </option>
        </Select>
      </InputContainer>
      <Button onClick={create}>Create</Button>
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
