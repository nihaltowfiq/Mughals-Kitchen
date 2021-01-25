import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  console.log(props.dish);
  return (
    <div>
      <Card className="mt-3">
        <CardBody>
          <CardImg
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: "0.7" }}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle>
              <h3>{props.dish.name}</h3>
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
