const express = require('express');
const axios = require('axios');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL DB config
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_new_password', // 👈 Replace with your MySQL password
  database: 'weather_dashboard'
});

// Connect to DB
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

// ✅ Your API Key
const apiKey = '9b2f9efdd7fb127528afedae48571ea5';

// GET /weather/:city - Fetch weather from API and store in DB
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  if (!city) return res.status(400).json({ error: 'City name is required' });

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      weather: data.weather[0].main
    };

    // Insert into DB
    const insertQuery = `INSERT INTO searches (city, temperature, humidity, weather) VALUES (?, ?, ?, ?)`;
    db.query(insertQuery, [weatherData.city, weatherData.temperature, weatherData.humidity, weatherData.weather], err => {
      if (err) console.error('DB insert error:', err);
    });

    res.json(weatherData);
  } catch (error) {
    if (error.response?.status === 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      console.error('Weather API error:', error.message);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

// GET /searches - Return recent searches
app.get('/searches', (req, res) => {
  const query = 'SELECT * FROM searches ORDER BY timestamp DESC LIMIT 10';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch search history' });
    res.json(results);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
