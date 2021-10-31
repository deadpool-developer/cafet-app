import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Sign_up from './Sign_up';

function App()
{
    return (

      <>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <Home/>
                </Route>
                
                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/Sign_up">
                    <Sign_up/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;