import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed**/
  
  function App() {
    const [value, setValue] = React.useState("");

    return (
      <>
        <input
          type="text"
          placeholder="Enter Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p>{value}</p>
      </>
    );
  }
  

export default App;
