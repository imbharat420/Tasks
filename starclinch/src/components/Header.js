import React from "react";
import "./styles/header.css";
import logo from "../resources/Vectorlogo.png";
// import { logo_image } from '../commen'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className="Header">
      <div className="Header_child">
        <div className="logo_div">
          <img src={logo} alt="" /> <p className="medium">StarClinch</p>
        </div>
        <div className="user_name"><p className="small">Hello, StarClinch </p> <AccountCircleIcon 
          style={{fontSize:"30px",cursor:"pointer"}}
        /></div>
      </div>
    </div>
  );
}

export default Header;
