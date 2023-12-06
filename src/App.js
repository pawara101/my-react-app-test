import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

  
  function App() {
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState(0);

    function calculateTotal() {
      setTotal(number1 + number2);
    }

    return (
      <div>
        <h2>Adding Two Numbers</h2>
        <input placeholder="First Number" type="number" val1={number1} onChange={(e) => setNumber1(+e.target.value)}/>
        <input placeholder="Second Number" type="number" val2={number1} onChange={(e) => setNumber2(+e.target.value)}/>
        <button onClick={calculateTotal}>Add Two Numbers</button>
        <p>Total: {total || ""}</p>
      </div>
    );
  }
  

export default App;
