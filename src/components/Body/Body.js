import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default Body;
