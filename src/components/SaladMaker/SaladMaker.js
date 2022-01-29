// To keep context focused, create Providers that wrap
// the nearest shared parent when possible.

// In this case Context and Provider are in same file (not like User vs. App)
// As User and App seem not to be closely related, for readability it is better 
// to keep those separate.

// However SaladContext is tied closely to SaladMaker.

// Data that needs to be shared: Array of SaladItems and a function for adding those items into array.

import React, { useReducer, createContext,useState } from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});

function reducer(state, item) {
  console.log(item);
  return [...state, item];
}

export const SaladContext = createContext();

export default function SaladMaker() {
  const [salad, setSalad] = useReducer(reducer, []);
  const classes = useStyles();
  return(
    <>
     <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
        <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
    </>
  )
}
