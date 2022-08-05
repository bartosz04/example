import React from "react";
import Search from "./components/SearchBox/Search";
import Item from "./components/ItemBox/Item";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pogoda na dziś</h1>
      <Search />
      <Item />
      <header className="App-header">
      <a
      className="App-link"
      href="https://www.pogodairadar.pl/pogoda/rybnik/10675631"
      target="_blank"
      rel="noopener noreferrer"
      >
        Rybnik
        </a>
        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/zory/6642331"
        target="_blank"
        rel="noopener noreferrer"
        >
          Żory
        </a>

        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/gdansk/12295524"
        target="_blank"
        rel="noopener noreferrer"
        >
          Gdańsk
        </a>

        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/warszawa/3091675"
        target="_blank"
        rel="noopener noreferrer"
        >
          Warszawa
        </a>

        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/katowice/12493430"
        target="_blank"
        rel="noopener noreferrer"
        >
          Katowice
        </a>

        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/krakow/6754153"
        target="_blank"
        rel="noopener noreferrer"
        >
          Kraków
        </a>


        <br></br><br></br>
         <a
        className="App-link"
        href="https://www.pogodairadar.pl/pogoda/lodz/2131618"
        target="_blank"
        rel="noopener noreferrer"
        >
          Łódź
        </a>

        </header>
    </div>
    
  );
}



export default App;
