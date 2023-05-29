import React from 'react';
import './About.css';
import Aboutus from './images/about.jpeg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='bottom'>
                    <h3><mark>Misión</mark></h3>
                    <p>Somos un puesto de antojitos mexicanos que ofrece un excelente sabor casero siempre pendientes de satisfacer las expectativas del cliente.</p>
                    <br></br>
                    <h3><mark>Visión</mark></h3>
                    <p>Consolidarnos como la mejor empresa de la región, por la experiencia, servicio y ambiente único que ofrecemos.</p>
                    <br></br>
                    <h3><mark>Sobre nosotros</mark></h3>
                    <p>Empezamos a vender en el año 1995 <br></br>
                    Nuestro negocio inició vendiendo cacahuates y semillas en el trébol en su casa (antes de agrandar su negocio) después agregaron a su venta chileatoles, elotes, tacos de cabeza y chicharrones aproximadamente 5 años.<br></br>
                    Empezaron 2 solamente Doña Irma y Don Cristóbal, con el tiempo iban contratando a más personal para poder generar más trabajo y ellos poder extenderse.<br></br>
                    El negocio ha sido actualizado a lo largo de este tiempo, agregando nuevos productos.<br></br>
                    El logo de la empresa es la representación de nuestra querida Doña Irma.
                    </p>
                    <br></br>
                    <img src={Aboutus} alt='aboutus'></img>
                </div>
            </div>
        </div>
    )
}

export default About