import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import "./register.css";

const Register = () => {

  const[user,setUser] = useState({
    Username:"" , email:"",phone:"",password:"",cpassword:""
  })

  const history = useHistory();
  let name , value;
  const handleInputs=(e)=>
  {
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e)=>
  {
     e.preventDefault();
     const{Username,email,phone,password,cpassword}=user;
     const res=await fetch("/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({

        Username,email,phone ,password,cpassword
       })
     });
     const data = await res.json();

     if(res.status===422 || !data)
     {
       window.alert("Invalid Regsitration");
       console.log("Invalid registration");
     }
     else{
       window.alert("Registration successful");
       console.log("Successfull Registration");
       history.push('/login');
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

          <form className="register-form" id="register-form" method="POST">
            <div className="form-group">
              <label htmlFor="Username">
                <i class="zmdi zmdi-account" style={{fontSize:"25px"}}></i>
              </label>

              <input
                type="text"
                name="Username"
                id="Username"
                autoComplete="off"
               value={user.Username}
                onChange={handleInputs}
                placeholder="Your Name"
                className="signup_input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i class="zmdi zmdi-email" style={{fontSize:"20px"}}></i>
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Your Email"
                className="signup_input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <i class="zmdi zmdi-phone-in-talk" style={{fontSize:"20px"}}></i>
              </label>

              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Your Phone"
                className="signup_input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="passoword">
                <i class="zmdi zmdi-lock" style={{fontSize:"20px"}}></i>
              </label>

              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                placeholder="Your Password"
                className="signup_input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpassoword" style={{fontSize:"20px"}}>
                <i class="zmdi zmdi-lock"></i>
              </label>

              <input
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder=" Confirm Your Password"
                className="signup_input"
              />
            </div>

      
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" 
               className="btn btn-warning signup_input submit" value="Register"
                 onClick={PostData}
               />
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

export default Register;
