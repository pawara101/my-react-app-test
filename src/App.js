import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com/users/2";
function App() {
  const [userData, setUserData] = React.useState({});
 
  const fetchInf = function () {
    return fetch(url).then((res) => res.json())
                    .then((data) => setUserData(data))
                
  };

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
      console.log('Fetching data...');
      fetchInf();
    }, []);
  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

  

export default App;
