import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';


import MainNavbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '@mui/material';
import Hero from './Hero';
import MenuCarousel from './Navbar/Carousel/MenuCarousel';
import Register from './Register/SignUp';
import Checkout from './Checkout/Checkout';
import NavbarCheckout from "./Checkout/NavbarCheckout"




function App()
{
    
    return (

      <>
        <Router>
            <Switch>
                 <Route exact path="/home">
                     <GlobalStyles/>
                    <Hero/>
                </Route>

                
                <Route exact path="/register">
                     <Register/>
                    
                </Route>
                
                <Route exact path="/login">
                     <Login/>
                    
                </Route>
                
               
                
        
                <Route exact path="/main">
                    <MainNavbar/>
                </Route>
                <Route exact path="/menu">
                    <MenuCarousel/>
                </Route>

                <Route exact path= "/checkout">
                    <Checkout/>
                </Route>
                
            </Switch>
        </Router>
        </>
    );
}

export default App;

