import React from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {useAuth, useAuthUpdate} from "./AuthContext";

export default function NavBar() {

  const history = useHistory();
  const toggleAuth = useAuthUpdate()
  const isAuth = useAuth()

  console.log("User logged: " + isAuth)

  if (useAuth()) {
    return (
      <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

        <div>
          <button
            type="button"
            onClick={toggleAuth}
          >Log out
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

        <div>
          <button
            type="button"
            onClick={() => history.push('/signin')}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => history.push('/signup')}
          >
            Registreren
          </button>
        </div>
      </nav>
    );
  }
}
