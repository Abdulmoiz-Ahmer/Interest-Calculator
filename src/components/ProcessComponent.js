import React, { Component } from "react";

export default class ProcessComponent extends Component {
  render() {
    return (
      <button
        type="submit"
        className="btn btn-dark  btn-block"
        onClick={this.props.calculateEverything}
      >
        Process
      </button>
    );
  }
}
