import React from "react";

function Login() {
  return (
    <>
      <h1>Login with your accoount</h1>
      <div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <button>Login</button>

      <p>Forgot password</p>
    </>
  );
}
export default Login;
