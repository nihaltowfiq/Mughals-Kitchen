import React, { Component } from "react";
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("mapStateToProps: ", state);
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

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
  render() {
    document.title = "Menu";
    const menu = this.props.dishes.map((item) => {
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
      const comments = this.props.comments.filter(
        (comment) => comment.dishId === this.state.selectedDish.id
      );
      dishDetail = (
        <DishDetail comments={comments} dish={this.state.selectedDish} />
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

export default connect(mapStateToProps)(Menu);
