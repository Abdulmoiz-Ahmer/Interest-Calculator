import React, { Component } from "react";
import SalaryComponent from "./SalaryComponent";
import InterestComponent from "./InterestComponent";
import ProcessComponent from "./ProcessComponent";
import "../styles/styles";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { total_salary: 0, interest_rate: 0, result: -1 };
    this.changeInSalary = this.changeInSalary.bind(this);
    this.changeInInterest = this.changeInInterest.bind(this);
    this.calculateEverything = this.calculateEverything.bind(this);
  }

  changeInSalary(event) {
    this.setState({
      total_salary: event.target.value
    });
  }

  changeInInterest(event) {
    this.setState({
      interest_rate: event.target.value
    });
  }

  calculateEverything(e) {
    e.preventDefault();
    const _result = ((this.state.interest_rate / 100) * this.state.total_salary)
    this.setState({
      result: _result
    });
  }
  render() {
    return (
      <div className="row form--custom bg-white">
        <form className="col-12">
          <SalaryComponent changeInSalary={this.changeInSalary} />
          <InterestComponent changeInInterest={this.changeInInterest} />
          <ProcessComponent calculateEverything={this.calculateEverything} />
          {this.state.result > -1 && (
            <div className="alert alert-success result-box" role="alert">
              {this.state.result}
            </div>
          )}
        </form>
      </div>
    );
  }
}
