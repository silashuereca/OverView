import React, { Component } from "react";

class FormAdd extends Component {
  state = {};
  render() {
    return (
      <div className="add-container">
        <form className="addform-container">
          <label>Acount Name</label>
          <input type="text" className="account" />
          <label>Amount</label>
          <input type="text" className="amount" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default FormAdd;
