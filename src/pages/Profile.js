import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Profile() {

  const { isAuth, username, email } = useContext(AuthContext)



  if (isAuth) {
    return (
      <>
        <h1>Profielpagina</h1>
        <section>
          <h2>Gegevens</h2>
          <p><strong>Gebruikersnaam: </strong>{username}</p>
          <p><strong>Email: </strong>{email}</p>
        </section>
        <section>
          <h2>Strikt geheime profiel-content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
            molestias qui quo unde?</p>
        </section>
        <p>Terug naar de <Link to="/">Homepagina</Link></p>
      </>
    );
  } else {
    return <Redirect to="/"/>
  }

}

export default Profile;