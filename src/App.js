import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./containers/Login";
import SignupPage from "./SignupPage";
import Home from "./containers/Home";
import RoomSearch from "./containers/Search";
import RoomCreate from "./containers/Create";

function App() {
  return (
    <div>
      <Route path="/" component={Login} exact={true} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={RoomCreate} />
      <Route path="/search" component={RoomSearch} />
    </div>
  );
}

export default App;
