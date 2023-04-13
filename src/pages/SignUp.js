import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function SignUp() {

  const { register } = useContext(AuthContext)

  const [user, setUser] = useState({
    email: null,
    password: null,
    username: null,
  })

  async function handleFormSubmit(e) {

    e.preventDefault()

    try {
      const result = await axios.post('http://localhost:3000/register', {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      register(user.email, user.username)

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?
      </p>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="username"
          autoComplete="username"
          onChange={(e) => {
            setUser({
              ...user,
              username: e.target.value
            })
          }}
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="email"
          autoComplete="email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value
            })
          }}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="password"
          autoComplete="current-password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value
            })
          }}
        />
        <button type="submit">SignUp</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;