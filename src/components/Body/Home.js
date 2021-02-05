import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("mapStateToProps: ", state);
  return {
    dishes: state.dishes,
  };
};

class Home extends Component {
  render() {
    console.log(this.props);
    document.title = "Mughal's Kitchen - Home";
    return (
      <div>
        <h1>This is HOME</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
