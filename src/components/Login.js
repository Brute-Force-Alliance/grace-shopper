import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // firebase login logic
  }

  const register = e => {
    e.preventDefault();

    // firebase register logic
  }

  return (
    <div className="login">
      <Link to='/'>
        <img 
        className="login__logo"
        src="https://i.ibb.co/3YR06S2/BFA-logo.png" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing in you agree to Brute Force Alliance's Conditions of Use & Sale. Please see our Privacy Notice, Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">Create an account</button>
      </div>

    </div>
  )
}

export default Login;
