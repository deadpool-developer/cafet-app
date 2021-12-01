import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import "./login.css";

const Login = () => {

  const history = useHistory();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const LoginUser=async(e)=>
  {
    e.preventDefault();

   const res= await fetch("/signin",{

    method:"POST",
    headers:{
     
      "Content-Type:":"application/json"
    },
    body:JSON.stringify({

      email,password
    })
   
   });

   const data = await res.json();

   if(res.status === 400 || !data)
   {
     window.alert("Invalid Credentials");
   }

   else
   {
     window.alert("Login successful");
     history.push("/main")
   }
   
  }
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

          <form  method="POST" className="register-form" id="register-form">
           

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
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="signup_input"
              />
            </div>

            

      
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" className="btn btn-warning signup_input submit" 
              value="Log In"
                onClick={LoginUser}
              />
               
           
           
            </div>


            
      
          </form>

          </div>

          <div className="right">
            <figure>
              <img src="https://p.kindpng.com/picc/s/617-6173616_spring-roll-hd-png-download.png"
                className="signup_img"
              />
            </figure>

            <NavLink to="/signin" style={{marginLeft:"35px",fontSize:"16px",fontWeight:"bold"}}>Already Registered ?</NavLink>
          </div>
       
        
      </div>
    </>
  );
};

export default Login;