import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return <div><nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Social App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/profile">Profile</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/trend">Trend</NavLink>
        </li>
        
        
       
      </ul>
      
    </div>
  </div>
</nav></div>;
};

export default Nav;
