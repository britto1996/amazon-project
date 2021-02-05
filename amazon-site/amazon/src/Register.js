import React from "react";
import "./Register.css";

function Login() {
  return (
    <div className="register">
      <img
        className="register__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
      <div className="register_container">
        <h1>Create Account</h1>

        <form>
          <h5>Your Name</h5>
          <input type="text" />

          <h5>Email</h5>
          <input type="email" />

          <h5>Password</h5>
          <input type="password" placeholder="At least 6 characters" />

          <h5>Re-enter password</h5>
          <input type="password" />

          <button type="submit" className="register__signInButton">
            Create Your Amazon Account
          </button>
        </form>
        <p>
          By creating account you agree to the BTM AMAZON ACCOUNT Conditions of
          Use & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <strong>
          Already have an account ?<a href="#">SignIn</a>
        </strong>
      </div>
    </div>
  );
}

export default Login;
