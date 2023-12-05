import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed**/
  
  function App() {
    const [toggle, setToggle] = React.useState(true);
    const [clickCount, setClickCount] = React.useState(0); //Declares two pieces of state using the useState hook
    
    const handleToggle = () =>{
      
      setToggle(!toggle);
      setClickCount(clickCount+1);
      console.log("click ",{clickCount},toggle)
      
     
    };

    
    return (
      <>
        <button type='button' onClick={handleToggle}>Hide Element Below</button>
  
        <div id='div1' style={{ display: toggle ? 'block' : 'none' }}>Toggle Challenge</div>
      </>
    );
  }

export default App;
