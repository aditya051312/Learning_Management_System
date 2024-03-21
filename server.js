const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Authenticate user
  // If authentication is successful, return status 200
  // If authentication fails, return status 401

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});