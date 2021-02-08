import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import CommentForm from "./CommentForm";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
  return (
    <div>
      <Card className="mt-3">
        <CardImg src={props.dish.image} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h3">{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
          <CardText>Price: {props.dish.price}/-</CardText>
          <hr />
          <LoadComments
            commentsIsLoading={props.commentsIsLoading}
            comments={props.comments}
          />
          <hr />
          <CommentForm dishId={props.dish.id} addComment={props.addComment} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
