import React from 'react'
import { useWeatherContext } from "../../../Context/WeatherContext";
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherDetail.css'
import '../../TodayWeather/TodayWeather.css'

const WeatherDetail = () => {
  const { cityWeather } = useWeatherContext();

  if ( cityWeather ){
    const {consolidated_weather} = cityWeather;

    return (
      <section className="weather-wrapper">

          {/* 5 DAYS Preview */}
          <div className='weather-container'>
            <div className="weather-card-wrapper">
            {consolidated_weather.filter(weather => weather.id !== consolidated_weather[0].id)   .map((weather, index) => console.log(weather.id, "index", index))}
              {consolidated_weather
                .filter((weather) => weather.id !== consolidated_weather[0].id)
                .map((weather, index) => (
                  <WeatherCard key={weather.id} weather={weather} index={index} />
                ))}
            </div>
          </div>

      </section>
    )
  }

  else{
    return (
      <div>WeatherDetail</div>
    )}
}

export default WeatherDetail

