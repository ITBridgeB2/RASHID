import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div>
      <h3>Weather in {data.city}</h3>
      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Weather: {data.weather}</p>
    </div>
  );
}

export default WeatherDisplay;
