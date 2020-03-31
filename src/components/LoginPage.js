import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_FORM_DATA } from "../redux/formActions";

import Modal from "../components/Modal";

import logo from "../assets/logo.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      passwordShow: false,
      showResetForm: false,
      showNotificationForm: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.resetFormHandler = this.resetFormHandler.bind(this);
    this.handleResetSubmit = this.handleResetSubmit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { getFormData } = this.props;
    e.preventDefault();
    getFormData(this.state.username, this.state.password);
    alert("SUBMITTED TO REDUX STORE!");
  }

  showPassword() {
    this.setState(prevState => ({
      passwordShow: !prevState.passwordShow
    }));
  }

  resetFormHandler() {
    this.setState(prevState => ({
      showResetForm: !prevState.showResetForm
    }));
  }

  handleResetSubmit(e) {
    e.preventDefault();

    if (this.state.email) {
      this.setState({
        showResetForm: false
      });
      setTimeout(() => {
        this.setState({
          showNotificationForm: true
        });
      }, 500);
    } else {
      alert("NO EMAIL")
    }
   
  }

  handleCloseForm() {
    this.setState({
      showResetForm: false,
      showNotificationForm: false
    });
  }

  render() {
    return (
      <>
        <div className="bg-wrapper">
          <div className="form-wrapper">
            <div className="form-head block--bordered">
              <div className="form-head__heading">
                <h1 className="form-head__title">Welcome</h1>
                <h3 className="form-head__subtitle">
                  Please sign in to continue
                </h3>
              </div>
            </div>
            <div className="form-head__logo">
              <img src={logo} alt="" />
            </div>
            <div className="form-body block--bordered">
              <form
                name="form"
                onSubmit={this.handleSubmit}
                className="form-body__form"
              >
                <label htmlFor="username" className="form-body__label">
                  UserName
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-body__input"
                  onChange={this.handleChange}
                />
                <label htmlFor="password" className="form-body__label">
                  Password
                </label>
                <div className="password-wrapper">
                  <input
                    name="password"
                    type={this.state.passwordShow ? "text" : "password"}
                    className="form-body__input"
                    onChange={this.handleChange}
                  />
                  <span
                    className="password-wrapper__label"
                    onClick={this.showPassword}
                  >
                    Show
                  </span>
                </div>
                <div className="form-body__form-controls">
                  <button className="form-body__submit" type="submit">
                    Sign In
                  </button>
                  <span
                    className="form-body__forgot-link small-text"
                    onClick={this.resetFormHandler}
                  >
                    Forgot password?
                  </span>
                </div>
              </form>
            </div>
            <div className="form-info">
              <div className="form-info__post">
                <a href="#" className="form-info__link">
                  Latest blog post
                </a>
                <span className="form-info__post-date small-text">
                  October 15, 2018
                </span>
                <p className="form-info__post-text small-text">
                  Create Efficiency with a Creative Asset Management Platform
                </p>
              </div>
              <div className="form-info__post">
                <a href="#" className="form-info__link">
                  Recent tweet
                </a>
                <span className="form-info__post-date">April 25, 2018</span>
                <p className="form-info__post-text small-text">
                  #HenryStewartEvents are bringing their #CreativeOps show to
                  NYC for the third…
                </p>
              </div>
            </div>
            {this.state.showResetForm && (
              <Modal
                handleChange={this.handleChange}
                handleCloseForm={this.handleCloseForm}
                handleResetSubmit={this.handleResetSubmit}
                resetForm={true}
              />
            )}

            {this.state.showNotificationForm && (
              <Modal
                handleChange={this.handleChange}
                handleCloseForm={this.handleCloseForm}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFormData: (username, password) =>
      dispatch({
        type: GET_FORM_DATA,
        payload: {
          username: username,
          password: password
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
