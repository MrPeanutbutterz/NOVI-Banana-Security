import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";

function SignIn() {

  const { login } = useContext(AuthContext)

  const [user, setUser] = useState({
    email: null,
    password: null,
  })

  async function handleFormSubmit(e) {

    e.preventDefault()

    try {
      const result = await axios.post('http://localhost:3000/login', {
        email: user.email,
        password: user.password,
      });
      console.log(result.data)
      login(
        result.data.user.email,
        result.data.user.username,
        result.data.user.id,
        result.data.accessToken
      )

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={(e) => handleFormSubmit(e)}>
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
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;