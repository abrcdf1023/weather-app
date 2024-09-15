// src/components/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      alert('請輸入城市名稱');
      return;
    }
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center my-4">
      <input
        type="text"
        placeholder="輸入城市名稱"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control mr-2"
      />
      <button type="submit" className="btn btn-primary">
        搜尋
      </button>
    </form>
  );
};

export default SearchBar;
