import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "host/header";

import "./index.css";

const launchFooter = () => {
  import("vue/mountFooter").then((mountFooter) => {
    mountFooter.default("#footer");
  });
};

const App = () => {
  useEffect(() => {
    launchFooter();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div>Name: host-app</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        {/* <button onClick={launchFooter}>Launch footer</button> */}
      </div>
      <div id="footer" />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
