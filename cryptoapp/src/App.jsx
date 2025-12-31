// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { get } from 'aws-amplify/api'

import './App.css';

function App() {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([])

  // Define function to call API (goes out to our gateway that 
  // then goes out to our lambda function and returns a js object (in app.js))
  async function fetchCoins() {
    const request = get({
      apiName: 'cryptoapi',
      path: '/coins'
    })
  
  // makes the request to the API
    const response = await request.response;
    const data = await response.body.json();
    console.log('data is', data);
    updateCoins(data.coins)
  }

  // Call fetchCoins function when component loads - i.e. on-load first time
  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App
