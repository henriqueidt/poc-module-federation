import React from "react";
import { useStore } from "../../store/store";

const Header = () => {
  const { count, increment } = useStore();

  return (
    <header>
      Header The count is: {count}
      <button onClick={increment}>increment</button>
    </header>
  );
};

export default Header;
