import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_EMAIL_FOR_RESTORE } from "../redux/formActions";

class Modal extends Component {
  render() {
    const { handleChange, handleResetSubmit, handleCloseForm } = this.props;

    return (
      <div className="modal-wrapper">
        <div className="modal-header">
          <div className="modal-header__heading">
            {this.props.resetForm ? "Password reset" : "Email sent"}
          </div>
          <div className="modal-header__close-btn" onClick={handleCloseForm}></div>
        </div>
        <form>
          <div className="modal-body">
            <p className="modal-text">
              {this.props.resetForm
                ? "Please enter the email address associated with your globaledit account to reset your password."
                : "Thank you, instructions to reset your password have been e-mailed to the address you provided!"}
            </p>
            {this.props.resetForm ? (
              <>
                <label htmlFor="email">Email Address</label>
                <input
                  className="modal-body__input"
                  name="email"
                  type="email"
                  onChange={handleChange}
                />
              </>
            ) : null}
          </div>
          {this.props.resetForm ? (
            <div className="modal-footer">
              <button type="submit" onClick={handleResetSubmit}>Submit</button>
              <button onClick={handleCloseForm}>Cancel</button>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFormData: () =>
      dispatch({
        type: GET_EMAIL_FOR_RESTORE,
        payload: {
          email: this.state.email
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(Modal);
