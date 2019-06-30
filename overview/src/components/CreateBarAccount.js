import React, { Component } from "react";
import Chart from "./Chart";
import FormPanel from "./FormPanel";

class CreateBarAccount extends Component {
  state = {
    left: -600
  };

  // Open navigation overlay with form inside
  handleClick = () => {
    this.setState(oldState => {
      return {
        left: oldState.left + 600
      };
    });
  };

  // close the navigation overlay
  closeClick = () => {
    this.setState(oldState => {
      return {
        left: oldState.left - 600
      };
    });
  };

  // Changes the value of the amount and the width of the bar graph through state
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Adding in the values to the state input array
  handleSubmit = e => {
    e.preventDefault();
    const newInput = {
      accountName: this.state.accountName,
      paid: this.state.paid
    };
  };

  // creates an acount with account name, amount of debt, and bar graph
  createAccount = item => {
    // let widthPercent = (100 / item.amount) * (item.amount - this.state.paid);

    return (
      <div
        className="chart-container"
        key={item.key}
        onClick={() => this.props.deleteAccount(item.key)}
      >
        <div className="account-container">
          <div className="accountName">
            <p>{item.account}</p>
          </div>
        </div>
        <div className="barAmount-container">
          <div className="barAmount" key={item.key}>
            <p>${item.amount}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const entryItems = this.props.entries;
    const accountEntry = entryItems.map(this.createAccount);

    return (
      <div>
        {/* navigation icon */}
        <div className="navbtn" onClick={this.handleClick}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        {/* form pannel */}
        <div
          className="formPannel-container"
          style={{ left: `${this.state.left}px` }}
        >
          {/* Close icon when form panel is open  */}
          <div className="close" onClick={this.closeClick} />

          {/* Form inside navigation panel */}
          
        <Chart accountEntry={accountEntry} />
      </div>
    );
  }
}

export default CreateBarAccount;
