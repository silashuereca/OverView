import React, { Component } from "react";

class Chart extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="data-container">{this.props.accountEntry}</div>
      </div>
    );
  }
}

export default Chart;
