import React, { useState } from 'react';
import { Logindata } from '../utils/data';
import "./login.css"
const Login = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
      const submitHandler = (e) => {
        e.preventDefault();
         Logindata({email,password})
      };
    return (
      <div id="loginform">
        <h2 id="headerTitle">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="row">
            <label>UserName</label>
            <input
              type="text"
              z
              placeholder="Enter UserName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="row">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="button" className="row">
            <button onClick={submitHandler}>Login</button>
          </div>
        </form>
      </div>
    );
};

export default Login;