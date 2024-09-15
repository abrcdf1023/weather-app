// src/components/WeatherDisplay.jsx

import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const currentWeather = weather.list[0];
  const cityName = weather.city.name;
  const country = weather.city.country;
  const weatherDescription = currentWeather.weather[0].description;
  const iconCode = currentWeather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <div className="weather-display text-center my-4">
      <h2>
        {cityName}, {country}
      </h2>
      <img src={iconUrl} alt={weatherDescription} />
      <h3>{weatherDescription}</h3>
      <p className="display-4">{currentWeather.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;