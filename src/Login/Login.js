import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  return (
    <>
      <div
        class="card signup_outer"
        style={{
          width: "50rem",
          height: "30rem",
          margin: "auto",
          marginTop: "60px",
          padding: "5px",
          
        }}
      >
        <div className="container mt-5 left">
          <h3 className="signup_heading">SIGN UP</h3>

          <form className="register-form" id="register-form">
           

            <div className="form-group">
              <label htmlFor="email">
                <i class="zmdi zmdi-email" style={{fontSize:"25px"}}></i>
              </label>

              <input
                type="email"
                email="email"
                id="email"
                autoComplete="off"
                placeholder="Your Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="signup_input"
              />
            </div>

            

            <div className="form-group">
              <label htmlFor="passoword">
                <i class="zmdi zmdi-lock" style={{fontSize:"25px"}}></i>
              </label>

              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Your Password"
                className="signup_input"
              />
            </div>

            

      
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" className="btn btn-warning signup_input submit" value="Register"/>
            </div>


            
      
          </form>

          </div>

          <div className="right">
            <figure>
              <img src="https://p.kindpng.com/picc/s/617-6173616_spring-roll-hd-png-download.png"
                className="signup_img" alt=""
              />
            </figure>

            <NavLink to="/signin" style={{marginLeft:"35px",fontSize:"16px",fontWeight:"bold"}}>Already Registered ?</NavLink>
          </div>
       
        
      </div>
    </>
  );
};

export default Login;