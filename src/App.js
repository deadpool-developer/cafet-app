import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
<<<<<<< HEAD
import Login from "./Login";
import Sign_up from './Sign_up';

=======
import Login from './Login';
>>>>>>> f10319b4286c8ba7cb6a46293f3ffb60f453f16c
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