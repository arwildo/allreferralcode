import React from "react";
import ReactDOM from "react-dom";
import './style.css';

import Landing from "./components/landing.js";

const Index = () => {
  return <Landing />
};

ReactDOM.render(<Index />, document.getElementById("root"));
