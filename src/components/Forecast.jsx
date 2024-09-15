// src/components/Forecast.jsx

import React from 'react';
import './Forecast.css';

const Forecast = ({ weather }) => {
  if (!weather) return null;

  const dailyData = [];
  const dateTracker = new Set();

  weather.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!dateTracker.has(date)) {
      dateTracker.add(date);
      dailyData.push(forecast);
    }
  });

  const futureForecast = dailyData.slice(1, 6);

  return (
    <div className="forecast row justify-content-center">
      {futureForecast.map((day, index) => {
        const date = day.dt_txt.split(' ')[0];
        const weatherDescription = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        return (
          <div className="forecast-day col-6 col-md-2 text-center" key={index}>
            <p>{date}</p>
            <img src={iconUrl} alt={weatherDescription} />
            <p>{weatherDescription}</p>
            <p>{day.main.temp}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
