import React, { useState } from "react";
import styled from "styled-components";
import back_ground from "./image/birthday_cake.jpg";

function SignupPage() {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  return (
    <div
      style={{
        disply: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            float: "right",
            justifyContent: "center",
            alignItems: "center",
            width: "20%",
            height: "70%",
            margin: "30px",
            marginTop: "140px",
            marginRight: "200px",
            borderRadius: "30px",
            opacity: "0.8",
            backgroundColor: "white",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#E895BC",
              }}
            >
              Sign Up
            </h1>
            <input
              style={{
                width: "90%",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(232, 149, 188, 0.21)",
                borderWidth: "2px",
                borderColor: "#E895BC",
              }}
              type="text"
              placeholder="ID"
              value={Id}
              onChange={onIdHandler}
            />
            <br />
            <input
              style={{
                width: "90%",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(232, 149, 188, 0.21)",
                borderWidth: "2px",
                borderColor: "#E895BC",
              }}
              type="password"
              placeholder="Password"
              value={Password}
              onChange={onPasswordHandler}
            />
            <br />
            <input
              style={{
                width: "90%",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(232, 149, 188, 0.21)",
                borderWidth: "2px",
                borderColor: "#E895BC",
              }}
              type="password"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
            <br />
            <input
              style={{
                width: "90%",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(232, 149, 188, 0.21)",
                borderWidth: "2px",
                borderColor: "#E895BC",
              }}
              type="email"
              placeholder="Email Address"
              value={Email}
              onChange={onEmailHandler}
            />
            <br />
            <input
              style={{
                width: "90%",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(232, 149, 188, 0.21)",
                borderWidth: "2px",
                borderColor: "#E895BC",
              }}
              type="text"
              placeholder="Full Name"
              value={Name}
              onChange={onNameHandler}
            />
            <form>
              <input type="checkbox" />I accept Terms of{" "}
              <a href="#/">Use&Privacy Policy</a>
            </form>
            <button
              style={{
                width: "90%",
                height: "32px",
                backgroundColor: "#E895BC",
                borderRadius: "15px",
                borderWidth: "0px",
              }}
            >
              Create Account
            </button>
          </form>
        </div>
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

export default SignupPage;
