import './WeatherCard.css'

const WeatherCard = ({ weather, index }) => {
    const { applicable_date, max_temp, min_temp, weather_state_name, weather_state_abbr} = weather;

  return (

    <div className="weather-card">
      {index === 0 ? <h5>Tomorrow</h5> : <h5>{applicable_date}</h5>}

      <div className="weather-icons">
        <img className='img-fluid' src={`https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`} alt={weather_state_name}/>
      </div>

      <div className="temp-wrapper">

        <div className="max-temp temp">
          {/* {Math.floor(max_temp)}°C */}
          <div className="cel temp">
            {Math.floor(max_temp)}
            <span>°C</span>
          </div>
          
          <div className="fah temp" style={{ display: "none" }}>
            {(max_temp * (9 / 5) + 32).toFixed(1)}
            <span>°F</span>
          </div>
        </div>

        <div className="min-temp temp">
          {/* {Math.floor(min_temp)}°C */}
          <div className="cel temp">
            {Math.floor(min_temp)}
            <span>°C</span>
          </div>
          
          <div className="fah temp" style={{ display: "none" }}>
            {(min_temp * (9 / 5) + 32).toFixed(1)}
            <span>°F</span>
          </div>
        </div>

    </div>
  </div>

  );
};

export default WeatherCard