import create from "zustand/vanilla";
import createStore from "zustand";

const store = create((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

const { getState, setState, subscribe, destroy } = store;

export const increment = () => {
  setState({
    count: getState().count + 1,
  });
};

export const useStore = createStore(store);

export default store;
