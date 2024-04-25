const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// If we have no env variable set, it will be served on port 8080
const port = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: '*', 
  credentials: true,  
  'access-control-allow-credentials': true,
  optionSuccessStatus: 200,
}

// Sets CORS to allow incoming requests from different places (i.e. a different port)
app.use(cors(corsOptions));

// Makes Express parse the JSON body of any requests and adds the body to the req object
app.use(bodyParser.json());

// Our GET endpoint
app.get('/car', (req, res) => {
  const cars = [
    {
      make: 'Honda',
      model: 'Civic',
      year: 2010
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2010
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2010
    }
  ];

  // Returns a response formatted as JSON
  res.json(cars);
});

// Keeps the port open to listen for incoming requests
app.listen(port, () => console.log(`Server is running at  http://localhost:${port}`));
