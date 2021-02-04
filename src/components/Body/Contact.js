import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-content mt-3">
          <div className="col-12 my-2">
            <h3>Send us your Feedback.</h3>
          </div>

          <div className="col-12 my-3">
            <Form>
              <FormGroup row>
                <Label md={2} htmlFor="firstname">
                  Firstname:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="firstname"
                    value=""
                    placeholder="First Name"
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
                    value=""
                    placeholder="Last Name"
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
                    value=""
                    placeholder="Phone Number"
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
                    value=""
                    placeholder="Email Address"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 4, offset: 5 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="agree" value="" />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 0 }}>
                  <Input type="select" name="contactType" value="">
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
                    value=""
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
