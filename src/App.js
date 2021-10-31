import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Navbar/navbar';
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
                <Route exact path= "/main">
                    <MainNavbar/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;