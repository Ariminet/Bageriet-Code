import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import API from '../../../API';
import './style.scss';
import { LoggedInContext } from '../../../Context/LoggedInContext';
const Login = () => {
  const [loggedin, setLoggedin] = useContext(LoggedInContext);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState(undefined);

  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });
  const { email, password } = payload;

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.postLogin('/login/login', payload, setUser);
      setLoggedin(true);
      setPayload({ email: '', password: '' });
      return res;
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));

    if (loggedin === true) {
      setRedirect(true);
    }
    // eslint-disable-next-line
  }, [user]);
  if (redirect) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          aria-label="email"
          value={email}
          onChange={handleChange}
          placeholder="Din email..."
          required
        />
        <input
          type="password"
          name="password"
          aria-label="password"
          value={password}
          required
          onChange={handleChange}
          placeholder="Dit password..."
        />
        <button type="submit">Login</button>
        <NavLink to="/login/create">Create Login</NavLink>
      </form>
    </div>
  );
};

export default Login;
