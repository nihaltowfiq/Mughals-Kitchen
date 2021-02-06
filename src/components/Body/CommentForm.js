import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: "",
      rating: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const dishId = this.props.dishId;
    const author = this.state.author;
    const rating = this.state.rating;
    const comment = this.state.comment;

    this.props.addComment(dishId, author, rating, comment);

    e.preventDefault();
    this.setState({
      author: "",
      comment: "",
      rating: "",
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            placeholder="Your Name"
            value={this.state.author}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Input
            onChange={this.handleInputChange}
            type="select"
            name="rating"
            value={this.state.rating}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            placeholder="Your Comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Button type="submit">Comment</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          dishId: dishId,
          author: author,
          rating: rating,
          comment: comment,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
