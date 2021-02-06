import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    sample: state.sample,
  };
};

class Home extends Component {
  render() {
    this.props.dispatch({
      type: "TEST",
      str: "Bohubrihi",
    });
    document.title = "Mughal's Kitchen - Home";
    return (
      <div>
        <h1>This is HOME</h1>
        {this.props.sample}
        {this.props.dishes.map((dish) => (
          <h1 key={dish.id}>{dish.name}</h1>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
