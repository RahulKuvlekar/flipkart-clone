import React, { createContext, useReducer } from "react";
import { filteredReducer } from "./FilteredReducer";
export const Context = createContext({
  user: null,
  sortByPrice: null,
  sortByInclude: [],
  sortBySize: [],
  sortByBrand: [],
  DispatchFilteredState: () => Promise,
});

export const ContextProvider = (props) => {
  const [filteredState, DispatchFilteredState] = useReducer(filteredReducer, {
    sortBy: null,
    sortByPrice: null,
    sortByInclude: [],
    sortBySize: [],
    sortByBrand: [],
  });
  const DEFAULT_VALUE = {
    user: "rahul",
    DispatchFilteredState: DispatchFilteredState,
    sortBy: filteredState.sortBy,
    sortByPrice: filteredState.sortByPrice,
    sortByInclude: filteredState.sortByInclude,
    sortBySize: filteredState.sortBySize,
    sortByBrand: filteredState.sortByBrand,
  };

  return (
    <Context.Provider value={DEFAULT_VALUE}>{props.children}</Context.Provider>
  );
};
