import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import '../styles/pages/landing.css';


import logoIgm from '../images/logo.svg';

function Landing() {
  return( <div id="page-landing">
      <div className="content-wrapper">
         <img src={logoIgm} alt="Happy"></img>
         <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite abrigos.</p>
         </main>
         <div className="location">
            <strong>Campo Mourão</strong>
            <span>Paraná</span>
         </div>

         <Link to="/app" className="enter-app"> <FiArrowRight size={26} color="rgba(0,0,0, 0.6)"></FiArrowRight> </Link>
      </div>
    </div>
  )
}

export default Landing;