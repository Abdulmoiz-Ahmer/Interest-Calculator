import React, { Component } from "react";
import "../styles/styles";

export default class SalaryComponent extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="formGroupExampleInput" className="text-dark">
          <h5>Total Salary</h5>
        </label>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Salary In Figures"
            onChange={this.props.changeInSalary}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">Rs</div>
          </div>
        </div>
      </div>
    );
  }
}
