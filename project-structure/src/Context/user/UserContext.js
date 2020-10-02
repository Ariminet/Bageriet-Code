import React, { createContext, useState } from 'react';
// Create the usability for context
export const UserContext = createContext();

// Context Data it has to provide and how
export const UserProvider = (props) => {
  // DATA  ( useEffect to get from a API)
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   ApiCall.get('url').then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // Return renders DataContext.Provider and the value is Array to get the functionality of both the state and set of the state
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
