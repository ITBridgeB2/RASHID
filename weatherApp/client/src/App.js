import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './searchForm';
import WeatherDisplay from './weatherDisplay';
import SearchHistory from './searchHistory';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather data for the specified city
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);  // Reset previous errors
    try {
      const res = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeatherData(res.data);
      fetchSearchHistory();  // Update history
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching weather');
    } finally {
      setLoading(false);
    }
  };

  // Fetch search history from the backend
  const fetchSearchHistory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/searches');
      setSearchHistory(res.data);
    } catch (err) {
      console.error('Error fetching search history:', err);
    }
  };

  // Fetch search history once the component is mounted
  useEffect(() => {
    fetchSearchHistory();
  }, []);

  return (
    <div className="app" style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Weather Dashboard</h1>
      <SearchForm onSearch={fetchWeather} />
      
      {/* Show loading indicator while fetching data */}
      {loading && <p>Loading...</p>}

      {/* Display any error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display weather data if available */}
      {weatherData && <WeatherDisplay data={weatherData} />}
      
      {/* Show the search history */}
      <SearchHistory history={searchHistory} />
    </div>
  );
}

export default App;
