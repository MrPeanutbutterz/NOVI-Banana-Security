import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';
import {Route, Switch} from "react-router-dom";

export default function App() {

  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={ isAuth ? Profile : Home}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </>
  );
}
