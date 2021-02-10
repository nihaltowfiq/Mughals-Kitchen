import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { fetchFeedbacks } from "../../redux/actionsCreator";

class Feedback extends Component {
  componentDidMount() {
    this.props.fetchFeedbacks();
  }
  render() {
    document.title = "Feedback";
    const feedback = this.props.feedbacks.feedbacks.map((item) => {
      return (
        <div key={item.id} className="col-md-6 my-3">
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-secondary">
                {item.firstname} {item.lastname}
              </CardTitle>
              <CardText tag="h5">"{item.message}"</CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row my-5">{feedback}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedbacks,
  };
};

const mapDispatchToProps = { fetchFeedbacks };

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
