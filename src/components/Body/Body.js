import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";

class Body extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/" to="/menu" />
      </div>
    );
  }
}

export default Body;
