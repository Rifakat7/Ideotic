import React, { useState } from "react";
import "./login.css";
import { Signupdata } from "../utils/data";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, Email] = useState("");
const navigate=useNavigate()
  const [password, setPassword] = useState("");
   const submitHandler = (e) => {
     e.preventDefault(); 
    var res= Signupdata({email,password})
    if(res=="done"){
        navigate("/login")
    } 
   };
  return (
    <div id="loginform">
      <h2 id="headerTitle">Signup</h2>
      <form onSubmit={submitHandler}>
        <div className="row">
          <label>UserName</label>
          <input
            type="eamil"
            z
            placeholder="Enter Email"
            value={email}
            onChange={(e) => Email(e.target.value)}
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
          <button onClick={submitHandler}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
