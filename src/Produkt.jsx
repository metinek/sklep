import './Produkt.css';
import React from 'react';
//obrazki
import cart from './img/cart.png';

function Produkt(props) {
    return (
        <div className="Produkt">
            <div className='Obrazek'>
                <img src={props.obrazek} alt={props.nazwa}/>
            </div>
            <p className='Nazwa'>{props.nazwa}</p>
            <p className='Cena'>{props.cena} zl</p>
            <button>
                <img src={cart} alt={props.nazwa}/>
            </button>
        </div>
    );
}

export default Produkt;
  