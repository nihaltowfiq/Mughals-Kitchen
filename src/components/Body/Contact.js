import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      agree: false,
      contactType: "Phone",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container ">
        <div className="row row-content d-md-flex justify-content-md-center pl-md-2 mt-3 text-left ">
          <div className="col-12 my-2 ">
            <h3>Send us your Feedback.</h3>
          </div>

          <div className="col-12 col-md-7 my-3 ">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label md={2} htmlFor="firstname">
                  Firstname:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="firstname"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="lastname">
                  Lastname:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="phone">
                  Phone No:
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="email">
                  Email:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 4, offset: 5 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        value={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 0 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="email">
                  Your Feedback:
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    placeholder="Enter your feedback"
                    rows={8}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
