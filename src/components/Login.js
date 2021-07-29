import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // firebase login logic
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    // firebase register logic

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //successfully creates user with an email and password
      console.log('user created id', auth.user.uid);
      return db.collection('users').doc(auth.user.uid)
      
    }).then(() => {
      if (auth) {
        history.push('/')
      }
    })
    .catch(error => alert(error.message))
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
