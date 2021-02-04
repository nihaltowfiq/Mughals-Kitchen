import React, { Component } from "react";
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
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
    const menu = this.state.dishes.map((item) => {
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
      const comments = this.state.comments.filter(
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

export default Menu;
