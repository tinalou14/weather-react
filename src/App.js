import React from "react";
import Weather from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <Weather />
       
        <h5>
        <a href="" target="_blank" rel="noreferrer">
          Open-source code
        </a>
        , by Tina Cooke from <a href="https://shecodes.io/" target="_blank" rel="noreferrer">She Codes</a>
        </h5>
        
      </header> 
    </div>
  );
}

export default App;
