  
import React, {FC, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./components/timer"
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Simple Timer</h1>
        <Timer></Timer>
        
        </header>

    </div>
  );
}

export default App;
