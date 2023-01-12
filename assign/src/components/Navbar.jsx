import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
    
    return (
<div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
    Dog
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link to="/login" >Login</Link>
    <Link to="/signup" >Register</Link>
    
   
  </div>
</div>
    );
};

export default Navbar;