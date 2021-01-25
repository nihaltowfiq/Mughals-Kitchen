import React from "react";

const MenuItem = (props) => {
  console.log(props.dish.name);
  return (
    <div>
      <h1>{props.dish.name}</h1>
    </div>
  );
};

export default MenuItem;
