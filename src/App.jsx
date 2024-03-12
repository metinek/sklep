import './App.css';
import React from 'react';
import Produkt from './Produkt.jsx';
//import obrazków
import marchewka from './img/marchewka.png';
import wisnia from './img/wiśnia.png';
import arbuz from './img/arbuz.png';

const produkty = [
{id:0, nazwa: "marchewka", obrazek: marchewka, cena: 2},
{id:1, nazwa: "arbuz", obrazek: arbuz, cena: 5.3},
{id:2, nazwa: "wisnia", obrazek: wisnia, cena: 7.2}
];


function App() {
  return (
  <div className="App">
    <header className="App-header">
      <h1>Sklep spożywczy</h1>
    </header>
    <div className='Blok'>
      {produkty.map( (e) =>(<Produkt key={e.id} nazwa={e.nazwa} obrazek={e.obrazek} cena={e.cena}/>) )}
    </div>
    <h2>Spis</h2>
    <p>
      
    </p>
  </div>
  );
}

export default App;
