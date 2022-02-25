import React from "react";
import NasaLogo from "../logo/logo.png";
import "./Navbar.css";

export const Navbar = () => {
 return (
  <div className="navbar-container">
   <div className="logo-container">
    <img className="nasa-logo" src={NasaLogo} alt="nasa-logo" />
    <div className="logo-phrase">
     <h1 className="slogan main-slogan">
      DSCOVR: <span className="slogan-span">EPIC</span>
     </h1>
     <h2 className="slogan secondary-slogan">
      Earth Polychromatic Imaging Camera{" "}
     </h2>
    </div>
   </div>
   <div className="u-container">
    <ul className="u-list">
     <li>Science</li>
     <li>Images</li>
     <li>Galleries</li>
     <li>About</li>
     <li>Publications</li>
    </ul>
   </div>
  </div>
 );
};
