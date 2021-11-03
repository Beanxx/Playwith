import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./SignupPage";
import Forgot from "./Forgot";

function App() {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/forgot" component={Forgot} />
    </div>
  );
}

export default App;
