import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";


const Register = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    // firebase register logic

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully creates user with an email and password
        console.log("user created id", auth.user.uid);
        console.log("user created email", auth.user.email);
        const collection = db.collection("users");
        const userId = auth.user.uid;

        collection.doc(userId).set({
          email: auth.user.email,
          uid: userId,
          firstName: firstName,
          lastName: lastName,
          street: street,
          state: state,
          city: city,
          zipcode: zipcode,
          isAdmin: false
        });
      })
      .then(() => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.ibb.co/3YR06S2/BFA-logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Register</h1>

        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h5>Last Name</h5>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h5>Street</h5>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <h5>City</h5>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <h5>State</h5>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <h5>Zipcode</h5>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <p>
          By signing in you agree to Brute Force Alliance's Conditions of Use &
          Sale. Please see our Privacy Notice, Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create an account
        </button>
      </div>
    </div>
  )
}

export default Register
