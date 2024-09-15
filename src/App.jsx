// src/App.jsx

import anime from 'animejs';
import React, { useState } from 'react';
import { fetchWeather } from './api/weatherApi';
import './App.css'; // 如果需要自訂樣式
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
      setLoading(false);

      // 動畫效果
      anime({
        targets: '.weather-display, .forecast',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      });
    } catch (error) {
      setLoading(false);
      alert('無法取得天氣資料，請確認城市名稱是否正確。');
    }
  };

  return (
    <div className="app container">
      <h1 className="text-center my-4">天氣預報應用程式</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="text-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
        </div>
      ) : null}
      <WeatherDisplay weather={weather} />
      <Forecast weather={weather} />
    </div>
  );
};

export default App;
