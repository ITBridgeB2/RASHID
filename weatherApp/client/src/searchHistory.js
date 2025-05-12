import React from 'react';

function SearchHistory({ history }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Recent Searches</h2>
      {history.length === 0 ? (
        <p>No recent searches.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {history.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <strong>{item.city}</strong> - {new Date(item.timestamp).toLocaleString()}
              <br />
              Temp: {item.temperature}°C, Humidity: {item.humidity}%, Weather: {item.weather}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchHistory;
