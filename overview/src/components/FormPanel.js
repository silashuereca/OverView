import React, { Component } from "react";

class FromPanel extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="formpannel-subContainer" onSubmit={this.handleSubmit}>
          <div>
            <label>Account Name</label>
          </div>
          <div>
            <input
              type="text"
              name="accountName"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Paid</label>
          </div>
          <div>
            <input type="text" name="paid" onChange={this.handleChange} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FromPanel;
