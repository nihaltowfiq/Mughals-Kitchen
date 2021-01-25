import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = ({ dish, onDishSelect }) => {
  return (
    <div>
      <Card className="mt-3">
        <CardBody>
          <CardImg
            width="100%"
            alt={dish.name}
            src={dish.image}
            style={{ opacity: "0.7" }}
          />
          <CardImgOverlay>
            <CardTitle
              tag="h3"
              onClick={onDishSelect}
              style={{ cursor: "pointer" }}
            >
              {dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
