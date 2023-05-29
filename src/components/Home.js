import React from 'react';
import './Home.css';
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Markers from './Markers';
import gallery from './images/gallery.png'

const Home = () => {
    return (
    <div className='home' id='home'>
        <div className='container-gallery'>
        </div>
        <div className='container-map'>
            <div className='map' id=''>
                <MapContainer center= {{lat: '18.854950638559547', lng: '-97.06669076122935'}} zoom={15}>
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Markers/>
                </MapContainer>
            </div>
        </div>
        <div className='container-img'> 
            <div className='imagen'>
                <img src={gallery} alt=''></img>
            </div>
        </div>
    </div>
    )
}

export default Home