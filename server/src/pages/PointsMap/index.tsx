import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarketImg from '../images/local.svg';

import '../styles/pages/points-map.css';

function PointsMap() {
   return(
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMarketImg} alt="happy"></img>

               <h2>Escolha um abrigo</h2>
               <p>Estão esperando a sua visita :)</p>
            </header>

            <footer>
               <strong>Campo Mourão</strong>
               <span>Paraná</span>
            </footer>
         </aside>

         <Map
            center={[-24.0427725, -52.4612136]}
            zoom={12}
            style={{ width: '100%', height: '100%'}}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         </Map>

         <Link to="/" className="create-pointsmap">
            <FiPlus size={32} color="#FFF"></FiPlus>
         </Link>
      </div>
   );

}

export default PointsMap;