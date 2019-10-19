import React, { Component } from "react";
import "../styles/styles";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="row header bg-dark shadow-none">
        <h2 className="mx-auto text-white header__heading2">
          Personal Interest Calculator
        </h2>
      </div>
    );
  }
}
