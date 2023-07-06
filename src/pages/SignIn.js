import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth, useAuthUpdate} from "../components/AuthContext";


function SignIn() {

  const history = useHistory();
  const toggleAuth = useAuthUpdate()
  const isAuth = useAuth()

  function handleFormSubmit(e) {

    e.preventDefault()
    console.log("User logged: " + isAuth)

    if(isAuth) {
      history.push('/profile')
    }
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="email" />
        <label htmlFor="password"></label>
        <input type="email" id="password" placeholder="password" />
        <button onClick={toggleAuth}>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;