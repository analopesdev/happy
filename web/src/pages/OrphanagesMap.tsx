import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import local from '../images/local.svg';


function OrphanagesMap() {
  console.log(process.env.REACT_APP_MAPBOX_TOKEN);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={local} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Campinas</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-22.7501536,-47.3608666]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link> 
    </div>
  )
}

export default OrphanagesMap;
