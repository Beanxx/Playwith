import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./SignupPage";

function App() {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignupPage} />
    </div>
  );
}

export default App;
