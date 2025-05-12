import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', width: '250px' }}
      />
      <button 
        type="submit"
        style={{ padding: '10px', marginLeft: '10px' }}
        disabled={!city.trim()}  // Disable the button if input is empty
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
