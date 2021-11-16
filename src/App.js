import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import Home from "./containers/HomePage";
import RoomSearch from "./containers/SearchPage";
import RoomCreate from "./containers/CreatePage";
import ForgotPage from "./containers/ForgotPage";
import VerifyMailPage from "./containers/VerifyMailPage";

function App() {
  return (
    <div>
      <Route path="/" component={Login} exact={true} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={RoomCreate} />
      <Route path="/search" component={RoomSearch} />
      <Route path="/forgot" component={ForgotPage} />
      <Route path="/verify" component={VerifyMailPage}/>
    </div>
  );
}

export default App;
