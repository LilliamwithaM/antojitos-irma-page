import React from 'react';
import './Products.css';
import Comal from '../components/images/food/comal.jpeg'
import Tortas from '../components/images/food/tortas.jpeg'
import Bebidas from '../components/images/food/bebidas.jpeg'
import Postres from '../components/images/food/postres.jpg'

const Products = () => {
    return (
        <div className='products' id='products'>
                <h2 className='title'>Productos</h2>
                    <div className='container'>
                    <div className='card'>
                        <img src={Comal} alt='comal'></img>
                        <h4>Del comal</h4>
                        <p>
                            <mark>Empanadas del comal:</mark><br></br>
                            Pollo<br></br>
                            Queso<br></br>
                            Champiñón<br></br>
                            Choriqueso<br></br>
                            Tinga<br></br>
                            Sesos<br></br>
                            Picadillo de pollo y res<br></br>
                            Memelas de frijol<br></br>
                            Tostadas sencillas<br></br>
                            Garnachas<br></br>
                            <mark>Memelas especiales:</mark><br></br>
                            Longaniza<br></br>
                            Bistec<br></br>
                            Suadero<br></br>
                            Carne deshebrada<br></br>
                        </p>
                    </div>

                    <div className='card'>
                        <img src={Tortas} alt='tortas'></img>
                        <h4>Tortas</h4>
                        <p>
                            Bistec<br></br>
                            Suadero<br></br>
                            Longaniza<br></br>
                            Enfrijoladas<br></br>
                            Tacos de sesos<br></br>
                            Hamburguesas<br></br>
                            (Pueden ser sencillas, especial, extra especial y hawaiana)<br></br>
                            Carne de res<br></br>
                            Sirlón<br></br>
                            Arrachera<br></br>
                            Atún<br></br>
                            Pollo<br></br>
                            Sincronizadas<br></br>
                            (Pueden ser sencillas, especial, extra especial y hawaiana)<br></br>
                        </p>
                    </div>

                    <div className='card'>
                        <img src={Bebidas} alt='bebidas'></img>
                        <h4>Bebidas</h4>
                        <p>
                            Agua de Jamaica<br></br>
                            Agua de horchata<br></br>
                            Boing:<br></br>
                            Fresa<br></br>
                            Mango<br></br>
                            Guayaba<br></br>
                            Tamarindo<br></br>
                            Uva<br></br>
                            Pepsi<br></br>
                            Coca-Cola<br></br>
                            7up<br></br>
                            Mirinda<br></br>
                            Café americano<br></br>
                            Capuchino<br></br>
                            Frappes<br></br>
                            Malteadas<br></br>
                            Licuados<br></br>
                        </p>
                    </div>

                    <div className='card'>
                        <img src={Postres} alt='postres'></img>
                        <h4>Postres</h4>
                        <p>
                        Plátanos fritos<br></br>
                        Gelatinas:<br></br>
                        Mosaico<br></br>
                        Chocolate<br></br>
                        Rompope<br></br>
                        Chicharrones:<br></br>
                        Largos<br></br>
                        Ruedas<br></br>
                        Lagrimita<br></br>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Products