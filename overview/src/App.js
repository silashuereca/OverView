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
    let yesOrNo = prompt(
      "Are you sure you want to delete this account? Type 'Yes' to delete the account or type 'No' if you do not wish to delete this account. This action cannot be undone."
    ).toLowerCase();

    if (yesOrNo === "yes") {
      const filterItems = this.state.items.filter(item => {
        return item.key !== key;
      });
      this.setState({
        items: filterItems
      });
    } else if (yesOrNo === "") {
      return;
    }
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
        <CreateBarAccount
          entries={this.state.items}
          deleteAccount={this.deleteAccount}
        />
      </div>
    );
  }
}

export default App;
