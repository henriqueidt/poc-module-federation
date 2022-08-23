import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";

import "./index.css";

const App = () => (
  <>
    <Header />
    <div className="container">
      <div>Name: host-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
