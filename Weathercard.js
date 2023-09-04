import React from 'react';

const WeatherCard = ({ weatherData, unit }) => {
  const { temp, description, icon } = weatherData;

  const toggleUnit = () => {
    // Implement logic to toggle between Celsius and Fahrenheit
  };

  return (
    <div className="weather-card">
      <div className="weather-info">
        <img src={icon} alt="Weather Icon" />
        <div>
          <h2>{temp}&deg;{unit}</h2>
          <p>{description}</p>
        </div>
      </div>
      <button onClick={toggleUnit}>Toggle Unit</button>
    </div>
  );
};

export default WeatherCard;
