import React, { Component } from "react";
import Loading from "./Loading";
class Home extends Component {
  render() {
    document.title = "Mughal's Kitchen - Home";
    return (
      <div>
        <h1>This is HOME</h1>
        <Loading />
      </div>
    );
  }
}

export default Home;
