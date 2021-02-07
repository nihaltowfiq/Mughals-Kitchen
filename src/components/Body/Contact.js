/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Control, LocalForm } from "react-redux-form";
import { Button, Col, FormGroup, Label } from "reactstrap";

class Contact extends Component {
  handleSubmit = (values) => {
    console.log(values);
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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup row>
                <Label md={2} htmlFor="firstname">
                  Firstname:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="lastname">
                  Lastname:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="phone">
                  Phone No:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="email">
                  Email:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 4, offset: 5 }}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 0 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor="email">
                  Your Feedback:
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    name="message"
                    placeholder="Enter your feedback"
                    rows={8}
                    className="form-control"
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
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
