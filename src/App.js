import React, { useState } from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from './Login/Login';
import SignUp from './SignUp';

function App()
{
    
    return (

      <>
      <h1>app</h1>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <Home/>
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

