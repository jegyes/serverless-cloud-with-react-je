// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { get } from 'aws-amplify/api'
import GitBornDate from './gitBornDate.jsx';

import './App.css';

function App() {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([])
  // Create additional state to hold user input for limit and start properties
  const [input, updateInput] = useState({ limit: 5, start: 0 })

  // Create a new function to allow users to update the input values
  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value })
  }

  // Define function to call API (goes out to our gateway that 
  // then goes out to our lambda function and returns a js object (in app.js))
  async function fetchCoins() {
    const { limit, start } = input
    const request = get({
      apiName: 'cryptoapi',
      path: `/coins?limit=${limit}&start=${start}`
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

      <h1>Crypto and GitHub Data Interactive</h1>
      <h2>A serverless web application built with React and AWS Amplify</h2>

      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="limit"
      />
      <input
        placeholder="start"
        onChange={e => updateInputValues('start', e.target.value)}
      />

      {/* Add button to the UI to give user the option to call the API */}
      <button onClick={fetchCoins}>Fetch Coins</button>
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h3>{coin.name} - {coin.symbol}</h3>
            <h4>${coin.price_usd}</h4>
          </div>
        ))
      }
      <GitBornDate />
    </div>
  );
}

export default App
