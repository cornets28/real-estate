import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
// import Dashboard from "../components/Dashboard";


export default (
  <Router>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/login"} component={Login} />
      {/* <Route exact path={"/Dashbord"} component={Dashboard} /> */}
    </Switch>
  </Router>
);
