import './App.css';
import React from 'react';
import { useState } from 'react';
import Produkt from './Produkt.jsx';
//import obrazków
import marchewka from './img/marchewka.png';
import wisnia from './img/wiśnia.png';
import arbuz from './img/arbuz.png';

const produkty = [
{id:0, nazwa: "marchewka", obrazek: marchewka, cena: 2, sztuk: 0},
{id:1, nazwa: "arbuz", obrazek: arbuz, cena: 5.3, sztuk: 0},
{id:2, nazwa: "wisnia", obrazek: wisnia, cena: 7.2, sztuk: 0}
];


function App() {
  let [sztuki, setSztuki] = useState(Array(produkty.length).fill(0))

  function obslugaKup(id) {
    let k=produkty.slice();
    k[id]++;
    setSztuki(k);
    produkty[id].sztuk++;
    wyswietlKoszyk();
  }

  function obslugaOddaj(id) {
    if (produkty[id].sztuk>0) {
      produkty[id].sztuk--;
      let k=produkty.slice();
      k[id]--;
      setSztuki(k);
      wyswietlKoszyk();
    }
  }

  function wyswietlKoszyk() {
    return (
      <div className='Koszyk'>
        <h2>Koszyk</h2>
        {produkty.map( (e) =>(

          <p key={"koszyk"+e.id}>{e.nazwa}: {e.sztuk}</p>
        ))}
        <p className='Suma'>Suma: </p>
      </div>
    );
  }

  return (
  <div className="App">
    <header className="App-header">
      <h1>Sklep spożywczy</h1>
    </header>
    <div className='Blok'>

      {produkty.map( (e) =>(
        <Produkt 
          key={e.id} nazwa={e.nazwa} obrazek={e.obrazek} cena={e.cena}
          kup={()=>obslugaKup(e.id)} oddaj={()=>obslugaOddaj(e.id)}
      />))}

    </div>

    {wyswietlKoszyk()}



  </div>
  );
}

export default App;
