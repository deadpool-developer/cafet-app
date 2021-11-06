import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import HomeMain from "./Home/HomeMain";
import Login from './Login/Login';
import SignUp from './SignUp';

import MainNavbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


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

