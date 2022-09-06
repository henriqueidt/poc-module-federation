import React from "react";
import { useStore } from "../../store/store";
import store, { increment as zustandIncrement } from "../../zustandStore/store";

const Header = () => {
  const { count, increment } = useStore();

  const { getState } = store;

  const { count: zustandCount } = getState();

  const onClick = () => {
    increment();
    zustandIncrement();
  };

  return (
    <header>
      <div>Header</div>
      <div>The redux count is: {count}</div>
      <div>The zustand count is: {zustandCount}</div>

      <button onClick={onClick}>increment</button>
    </header>
  );
};

export default Header;
