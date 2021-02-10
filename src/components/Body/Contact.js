/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions, Control, Errors, Form } from "react-redux-form";
import { Alert, Button, Col, FormGroup, Label } from "reactstrap";
import { baseURL } from "../../redux/baseURL";

const required = (val) => val && val.length;
const isAlphabet = (val) => !/[^a-zA-Z]/.test(val);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
    val
  );

class Contact extends Component {
  state = {
    showAlert: false,
    alertMsg: null,
    alertType: null,
  };

  handleSubmit = (values) => {
    axios
      .post(`${baseURL}/feedbacks`, values)
      .then((res) => res.status)
      .then((status) => {
        if (status === 201) {
          this.setState({
            showAlert: true,
            alertMsg: "Successfully Submitted",
            alertType: "success",
          });
        }
        setTimeout(() => {
          this.setState({
            showAlert: false,
          });
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          showAlert: true,
          alertMsg: error.message,
          alertType: "danger",
        });
        setTimeout(() => {
          this.setState({
            showAlert: false,
          });
        }, 2000);
      });
    this.props.resetFeedbackForm();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container ">
        <div className="row row-content d-md-flex justify-content-md-center pl-md-2 mt-3 text-left ">
          <div className="col-12 my-2 text-center">
            <h3>Send us your Feedback.</h3>
          </div>

          <div className="col-12 col-md-7 my-3 ">
            <Alert
              className="text-center"
              isOpen={this.state.showAlert}
              color={this.state.alertType}
            >
              {this.state.alertMsg}
            </Alert>
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
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
                    validators={{ required, isAlphabet }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      isAlphabet: "Type Alphabet",
                    }}
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
                    validators={{ required, isAlphabet }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Required",
                      isAlphabet: "Type Alphabet",
                    }}
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
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phone"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Invalid Number",
                    }}
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
                    validators={{ required, validEmail }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid Email",
                    }}
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
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".message"
                    show="touched"
                    messages={{ required: "Required" }}
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

// Function form of mapDispatchToProps!!
// const mapDispatchToProps = (dispatch) => {
//   return {
//     resetFeedbackForm: () => {
//       dispatch(actions.reset("feedback"));
//     },
//   };
// };

// Object shorthand form of mapDispatchToProps!!
const mapDispatchToProps = {
  resetFeedbackForm: () => actions.reset("feedback"),
};

export default connect(null, mapDispatchToProps)(Contact);
