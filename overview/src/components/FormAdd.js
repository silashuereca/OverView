import React, { Component } from "react";
import Chart from "./Chart";

class FormAdd extends Component {
  state = {
    account: "",
    amount: "",
    key: "",

    items: []
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      key: Date.now()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const state = this.state;
    const newItem = {
      account: state.account,
      amount: state.amount,
      key: state.key
    };

    if (newItem.account !== "" && newItem.amount !== "") {
      let items = [...state.items, newItem];
      this.setState({
        items: items,
        account: "",
        amount: "",
        key: ""
      });
    }

    console.log(state.items);
  };

  render() {
    return (
      <div>
        <div className="add-container" onSubmit={this.handleSubmit}>
          <form className="addform-container">
            <label>Acount Name</label>
            <input
              type="text"
              name="account"
              className="account"
              onChange={this.handleChange}
            />
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              className="amount"
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <Chart entries={this.state.items} />
      </div>
    );
  }
}

export default FormAdd;
