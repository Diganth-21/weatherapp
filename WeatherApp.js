import React, { useState } from 'react';
import WeatherCard from './Weathercard';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState('C'); // Default to Celsius

  const apiKey = 'b546150d6fbb4b3696f22827232108'; // Replace with your actual API key
  const apiBaseUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={b546150d6fbb4b3696f22827232108}'; // Replace with the API endpoint

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/weather?q=${location}&appid=${apiKey}`);
      const data = await response.json();

      const weatherInfo = {
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      };

      setWeatherData(weatherInfo);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {Object.keys(weatherData).length > 0 && (
        <WeatherCard weatherData={weatherData} unit={unit} />
      )}
    </div>
  );
};

export default WeatherApp;
