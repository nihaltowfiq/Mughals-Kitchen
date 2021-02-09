import React, { Component } from "react";
import { connect } from "react-redux";
import { CardColumns } from "reactstrap";
import { fetchDishes } from "../../redux/actionsCreator";
import Loading from "./Loading";
class Home extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    // console.log(this.props.dishes.dishes);
    document.title = "Mughal's Kitchen - Home";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else {
      const homeDishes = this.props.dishes.dishes.map((dish) => {
        return (
          <div key={dish.id}>
            <img src={dish.image} alt="dish" className="img-fluid" />
            <h3>{dish.name}</h3>
          </div>
        );
      });

      return (
        <div>
          <h3 className="text-info font-weight-bold">
            To Order Food go to Menu!
          </h3>
          <CardColumns>{homeDishes}</CardColumns>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

const mapDispatchToProps = {
  fetchDishes: fetchDishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
