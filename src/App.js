import React, { useState } from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from './server/Login/Login';
import SignUp from './SignUp';
import Dashboard from "./server/Dashboard/Dashboard";
import Preferences from "./server/Preferences/Preferences";
import useToken from "./useToken";


function App()
{
    const {token ,setToken}=useToken();
    
    if(!token)
    {
        return <Login setToken={setToken}/>
    }
    return (

      <>
      <h1>app</h1>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <Home/>
                </Route>
                
                
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                
                <Route exact path="/preferences">
                    <Preferences/>
                </Route>
                <Route exact path="/SignUp">
                    <SignUp/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;