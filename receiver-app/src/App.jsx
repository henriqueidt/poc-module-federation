import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "host/header";
import { StoreProvider, useStore } from "host/store";
import { useStore as zustandUseStore } from "host/zustandStore";
import "webComponents/counterInfo";

import "./index.css";

const launchFooter = () => {
  import("vue/mountFooter").then((mountFooter) => {
    mountFooter.default("#footer");
  });
};

const App = () => {
  const { count, increment } = useStore();

  const { count: zustandCount, increment: zustandIncrement } =
    zustandUseStore();

  useEffect(() => {
    launchFooter();
  }, []);

  const onClick = () => {
    increment();
    zustandIncrement();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div>The redux count is: {count}</div>
        <div>The zustand count is: {zustandCount}</div>
        <button onClick={onClick}>increment</button>

        <div>Name: host-app</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        {/* <button onClick={launchFooter}>Launch footer</button> */}
        <counter-info name="john">
          <div slot="email">john@gmail.com</div>
        </counter-info>
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
