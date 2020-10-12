import React from 'react';
import {FiArrowRight} from "react-icons/fi";

import logo from "../images/logo.svg";
import "../styles/pages/landing.css";

function Landing() {

    return(
           <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Logo Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite um abrigo.</p>
        </main>
        <div className="location">
          <strong>Campo Mourão</strong>
          <span>Paraná</span>
        </div>

        <a href="/home" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </div>
    ); 

}

export default Landing;