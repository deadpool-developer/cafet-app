import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import HomeMain from "./Home/HomeMain";
import Login from './server/Login/Login';
import SignUp from './SignUp';
import Dashboard from "./server/Dashboard/Dashboard";
import Preferences from "./server/Preferences/Preferences";
import useToken from "./useToken";
import MainNavbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App()
{
    const {token ,setToken}=useToken();
    
    if(!token)
    {
        return <Login setToken={setToken}/>
    }
    return (

      <>
        <Router>
            <Switch>
                 <Route exact path="/home">
                    <HomeMain/>
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
                <Route exact path="/main">
                    <MainNavbar/>
                </Route>
                
                
            </Switch>
        </Router>
        </>
    );
}

export default App;