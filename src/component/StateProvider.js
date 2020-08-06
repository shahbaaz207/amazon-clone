// setup data layout
// we neeed to track basket

import React, { createContext,useReducer, useContext } from "react";

// this is the data loyout
export const StateContext=createContext();

// Build a Provider

export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside the commponent

export const  useStateValue=()=>useContext(StateContext)