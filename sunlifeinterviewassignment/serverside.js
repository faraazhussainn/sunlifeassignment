const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 5000;

// Google status endpoint //
app.get('/v1/google-status', async (req, res) => {
  try {
    const start = Date.now();
    const response = await axios.get('https://www.google.com');
    const duration = Date.now() - start;
    const data = {
      url: response.config.url,
      statusCode: response.status,
      duration,
      date: Date.now(),
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Amazon status endpoint //
app.get('/v1/amazon-status', async (req, res) => {
  try {
    const start = Date.now();
    const response = await axios.get('https://www.amazon.com');
    const duration = Date.now() - start;
    const data = {
      url: response.config.url,
      statusCode: response.status,
      duration,
      date: Date.now(),
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// All status endpoint //
app.get('/v1/all-status', async (req, res) => {
  try {
    const start = Date.now();
    const [googleResponse, amazonResponse] = await Promise.all([
      axios.get('https://www.google.com'),
      axios.get('https://www.amazon.com'),
    ]);
    const duration = Date.now() - start;
    const data = [
      {
        url: googleResponse.config.url,
        statusCode: googleResponse.status,
        duration,
        date: Date.now(),
      },
      {
        url: amazonResponse.config.url,
        statusCode: amazonResponse.status,
        duration,
        date: Date.now(),
      },
    ];
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Start serve//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});