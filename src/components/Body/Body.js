import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import Feedback from "./Feedback";

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default Body;
