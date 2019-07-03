import React, { Component } from "react";
import "./App.css";
import CreateBarAccount from "./components/CreateBarAccount";

class App extends Component {
  state = {
    // adding in the accountName form and progress bar
    account: "",
    amount: "",
    key: "",
    // adding in a from panel to help replace other objects with the same account name
    accountName: "",
    paid: "",

    items: []
  };

  deleteAccount = key => {
    const filterItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({
      items: filterItems
    });
  };

  // changing the state's account, amount, key values
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      key: Date.now()
    });
  };
  // Submitting the input forms info into the items array
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
  };

  render() {
    return (
      <div>
        <div className="add-container" onSubmit={this.handleSubmit}>
          <form className="addform-container">
            <label>Account Name</label>
            <input
              name="account"
              className="account"
              value={this.state.account}
              onChange={this.handleChange}
            />
            <label>Amount</label>
            <input
              name="amount"
              className="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <CreateBarAccount
          entries={this.state.items}
          deleteAccount={this.deleteAccount}
        />
      </div>
    );
  }
}

export default App;
