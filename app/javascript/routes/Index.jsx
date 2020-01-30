import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";

export default (
  <Router>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/signups"} component={Dashboard} />
    </Switch>
  </Router>
);
