import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "host/header";
import { StoreProvider, useStore } from "host/store";

import "./index.css";

const launchFooter = () => {
  import("vue/mountFooter").then((mountFooter) => {
    mountFooter.default("#footer");
  });
};

const App = () => {
  const { count, increment } = useStore();

  useEffect(() => {
    launchFooter();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div>The count is: {count}</div>
        <button onClick={increment}>increment</button>
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
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
