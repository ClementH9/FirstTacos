import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Assets/logo-ft.png";

const Header = () => {
    return (
    <header>
        <img src={logo} alt="First Tacos" className="logo"/>
        <p className="adresse"><FontAwesomeIcon icon={faLocationDot} /> 5 rue Jean Jaurès, 59290 Wasquehal</p>
    </header>
    )
  };
  
  export default Header;