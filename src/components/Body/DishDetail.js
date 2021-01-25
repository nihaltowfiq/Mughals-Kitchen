import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const DishDetail = (props) => {
  console.log(props);
  return (
    <div>
      <Card className="mt-3">
        <CardImg src={props.dish.image} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h3">{props.dish.name}</CardTitle>
          <CardText>
            <p>{props.dish.description}</p>
            <p>Price: {props.dish.price}/-</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
