import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand
            href="/"
            style={{ fontFamily: "Kaushan Script", fontSize: "24px" }}
          >
            Mughal Restaurant
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
