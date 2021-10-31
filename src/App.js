import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from './Login';
function App()
{
    return (

      <>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path = "/login">
                    <Login/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;