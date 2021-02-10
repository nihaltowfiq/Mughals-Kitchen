import React, { Component } from "react";
import {
  Alert,
  Button,
  CardColumns,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import {
  addComment,
  fetchComments,
  fetchDishes,
} from "../../redux/actionsCreator";
import Loading from "./Loading";

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }
  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMsg != null) {
      return (
        <Alert className="mt-4 text-center" color="danger">
          {this.props.dishes.errMsg}
        </Alert>
      );
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <MenuItem
            onDishSelect={() => this.onDishSelect(item)}
            key={item.id}
            dish={item}
          />
        );
      });

      let dishDetail = null;
      if (this.state.selectedDish != null) {
        const comments = this.props.comments.comments.filter(
          (comment) => comment.dishId === this.state.selectedDish.id
        );
        dishDetail = (
          <DishDetail
            comments={comments}
            dish={this.state.selectedDish}
            addComment={this.props.addComment}
            commentsIsLoading={this.props.comments.isLoading}
          />
        );
      }
      return (
        <div>
          <div className="container">
            <div className="row">
              <CardColumns>{menu}</CardColumns>

              <Modal isOpen={this.state.modalOpen}>
                <ModalBody>{dishDetail}</ModalBody>
                <ModalFooter>
                  <Button onClick={this.toggleModal} color="danger">
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

// Function form of mapDispatchToProps!!
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addComment: (dishId, author, rating, comment) =>
//       dispatch(addComment(dishId, author, rating, comment)),
//     fetchDishes: () => dispatch(fetchDishes()),
//     fetchComments: () => dispatch(fetchComments()),
//   };
// };

// Object shorthand form of mapDispatchToProps!!
const mapDispatchToProps = { addComment, fetchDishes, fetchComments };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
