import React, { useState } from "react";
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
          placeholder="password"
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
};
