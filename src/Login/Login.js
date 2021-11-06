/*import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials)
{
  return fetch('http://localhost:8080/login', {
    method : 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(credentials)
  })
   .then(data => data.json())
}

export default function Login({setToken}) {
   
  const [username , setUserName] = useState();
  const [password , setPassword]=useState();

  const handleSubmit = async e =>{
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
      <h1>Login with your accoount</h1>

      <form onSubmit={handleSubmit}>
      <div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={e=> setUserName(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <button>Login</button>

      <p>Forgot password</p>
      </form>
    </>
  );
}

Login.propTypes={
  setToken:PropTypes.func.isRequired
};*/


import React, {useState} from "react"

import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <button className="button" onClick={login}>Login</button>
            <div>or</div>
            <button className="button" onClick={() => history.push("/register")}>Register</button>
        </div>
    )
}

export default Login;
