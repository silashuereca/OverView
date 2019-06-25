import React, { Component } from "react";

class NavBtn extends Component {
  state = {
    width: 0
  };

  handleClick = () => {
    this.setState(oldState => {
      return {
        width: oldState.width + 500
      };
    });
  };

  closeClick = () => {
    this.setState(oldState => {
      return {
        width: oldState.width - 500
      };
    });
  };

  render() {
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
          style={{ width: `${this.state.width}px` }}
        >
          <div className="close" onClick={this.closeClick} />
        </div>
      </div>
    );
  }
}

export default NavBtn;
