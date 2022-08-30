import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const useStore = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
  };
};

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
