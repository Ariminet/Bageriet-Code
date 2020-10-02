import React, { createContext, useEffect, useState } from 'react';
import API from '../API';

// Create the usability for context
export const LoggedInContext = createContext();

// Context Data it has to provide and how
export const LoggedInProvider = (props) => {
  const [loggedin, setLoggedin] = useState();
  // DATA  ( useEffect to get from a API)

  useEffect(() => {
    API.isLoggedIn('/login/loggedin', setLoggedin);
  }, []);

  const isAuth = () => {
    setLoggedin(false);
  };

  // Return renders LoggedInContext.Provider and the value is Array to get the functionality of both the state and set of the state
  return (
    <LoggedInContext.Provider value={[loggedin, setLoggedin]} isAuth={isAuth}>
      {props.children}
    </LoggedInContext.Provider>
  );
};
