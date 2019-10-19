import React from "react";
import FormComponent from "./components/FormComponent";
import "./styles/styles";

import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="container-fluid container--custom pl-0 pr-0">
      <div className="row">
        <div className="col-lg-2 col-0"></div>
        <div className="col-lg-8 col-12 container--custom_child">
          <HeaderComponent />
          <FormComponent />
        </div>
        <div className="col-lg-2 col-0"></div>
      </div>
    </div>
  );
}

export default App;
