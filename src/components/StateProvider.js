import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
// Doesn't this initialize the context with no value? You are depending on it having values all over your application.
export const StateContext = createContext();

// Wrap our app and provide the data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);
