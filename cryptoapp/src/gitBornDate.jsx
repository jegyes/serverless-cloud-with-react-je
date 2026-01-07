// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { get } from 'aws-amplify/api'

import './App.css';

function GitBornDate() {    
    const [born, setBorn] = useState(null);
    const [error, setError] = useState('');

async function fetchBorn() {
  try {
    const request = get({
      apiName: 'cryptoapi',
      path: `/born`,
    });

    const response = await request.response;
    const data = await response.body.json();
    console.log('born response', data);

    // setBorn and setError was scripted with ai assistance - I tried various
    // approaches to defining the github-data shape and was unsuccessful at getting 
    // it to render anything (the app worked - just not response from github would
    // render; with ai assist I could learn that github response was in in an array
    // thus call for the index for the single value:
    // Initially, I had hardcoded the created_at data in my lamda app.js, which worked great.
    setBorn(data?.born?.[0]?.created_at ?? null);
    } catch (e) {
      console.error(e);
      setError('cannot load github user created_at data');
    }
  }

  useEffect(() => {
    fetchBorn();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <p>
      The GitHub account for username "jegyes" was created on: {born ?? "Loading..."}.
    </p>
  );
}

export default GitBornDate;