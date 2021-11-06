import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Home from "./Home";
import Login from './Login/Login';
import SignUp from './SignUp';
=======
import HomeMain from "./Home/HomeMain";
import Login from './server/Login/Login';
import SignUp from './SignUp';
import Dashboard from "./server/Dashboard/Dashboard";
import Preferences from "./server/Preferences/Preferences";
import useToken from "./useToken";
import MainNavbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 106c31afcb1fb610d6bfc62d5f56ef476f3fabcf

function App()
{
    
    return (

      <>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <HomeMain/>
                </Route>
                
                
                <Route exact path="/SignUp">
                    <SignUp/>
                </Route>
                <Route exact path="/main">
                    <MainNavbar/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;

