import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

class Navigation extends Component {
  state = {
    isNavOpen: false,
  };

  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="sm">
          <div className="container">
            <NavbarBrand
              href="/"
              style={{ fontFamily: "Kaushan Script", fontSize: "24px" }}
            >
              Mughal's Kitchen
            </NavbarBrand>

            <NavbarToggler onClick={this.navToggle} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink exact to="/home" className="nav-link">
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/menu" className="nav-link">
                    Menu
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/feedback" className="nav-link">
                    Feedback
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
