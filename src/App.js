import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  // State variable to hold the fetched data
  const [data, setData] = useState([]);

  // URL for the API endpoint
  const url = "https://jsonplaceholder.typicode.com/users";

  // Function to fetch data from the API
  const fetchInfo = function () {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    console.log('Fetching data...');
    fetchInfo();
  }, []);

  // JSX rendering of the component
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj, index) => (
          <div
            key={index} // Adding a unique key to each rendered element
            style={{
              width: "15em",
              backgroundColor: "#35D841",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
          >
            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
          </div>
        ))}
      </center>
    </div>
  );
}


export default App;
