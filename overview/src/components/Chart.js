import React, { Component } from "react";

class Chart extends Component {
  state = {};
  createAccount = item => {
    return (
      <div className="account-bar" key={item.key}>
        {item.account}
        {item.amount}
      </div>
    );
  };

  render() {
    console.log(this.props.entries);
    const entryItems = this.props.entries;
    const accountEntries = entryItems.map(this.createAccount);
    return (
      <div className="chart-container" entries={this.props.entries}>
        {accountEntries}
      </div>
    );
  }
}

export default Chart;
