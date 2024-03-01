import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
    <header>
        <h1>FIRST TACOS</h1>
        <p className="adresse"><FontAwesomeIcon icon={faLocationDot} /> 5 rue Jean Jaurès, 59290 Wasquehal</p>
    </header>
    )
  };
  
  export default Header;