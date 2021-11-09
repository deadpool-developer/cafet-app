import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Login from './server/Login/Login';
import Dashboard from "./server/Dashboard/Dashboard";
import Preferences from "./server/Preferences/Preferences";
import useToken from "./useToken";
import MainNavbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '@mui/material';
import Hero from './Hero';
import MenuCarousel from './Navbar/Carousel/MenuCarousel';
import Checkout from './Checkout/Checkout';




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
                     <GlobalStyles/>
                    <Hero/>
                </Route>

                <Route exact path= "/checkout">
                    <Checkout/>
                </Route>
                
                
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                
                <Route exact path="/preferences">
                    <Preferences/>
                </Route>
                <Route exact path="/main">
                    <MainNavbar/>
                </Route>
                <Route exact path="/menu">
                    <MenuCarousel/>
                </Route>
                
            </Switch>
        </Router>
        </>
    );
}

export default App;