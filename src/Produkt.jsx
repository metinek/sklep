import './Produkt.css';
import React from 'react';


function Produkt(props) {
    return (
        <div className="Produkt">
            <div className='Obrazek'>
                <img src={props.obrazek} alt={props.nazwa}/>
            </div>
            <p className='Nazwa'>{props.nazwa}</p>
            <p className='Cena'>{props.cena} zl</p>

            <button onClick={props.kup}>
                <p className='Kup'>+</p>
            </button>

            <button onClick={props.oddaj}>
                <p className='Oddaj'>-</p>
            </button>
            
        </div>
    );
}

export default Produkt;
  