import React, { Component } from "react";
import "../styles/styles";

export default class InterestComponent extends Component {

  render() {
    return (
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">
          <h5>Interest Rate</h5>
        </label>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Interest Rate"
            onChange={this.props.changeInInterest}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">%</div>
          </div>
        </div>
      </div>
    );
  }
}
