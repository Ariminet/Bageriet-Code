import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoggedInContext } from '../../../Context/LoggedInContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedin] = useContext(LoggedInContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (loggedin !== undefined) {
      setRedirect(!loggedin);
    }
  }, [loggedin]);

  if (redirect) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
