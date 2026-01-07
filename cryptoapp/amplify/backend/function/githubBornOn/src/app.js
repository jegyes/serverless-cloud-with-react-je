/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


// app.get('/born', function(req, res) {
//   const born = [
//     { created_at: "2024-07-10T13:36:55Z" },
//   ]
//   res.json({
//     born
//   })
// })

app.get('/born', async function(req, res) {
  // Define base url
  let apiUrl = `https://api.github.com/users/jegyes`

  // Call API and return response
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    res.json({born: json.created_at});
  } catch(error) {
    res.json({error: error});
  }
})

module.exports = app
