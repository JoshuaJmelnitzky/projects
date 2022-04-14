import { useWeatherContext } from "../../Context/WeatherContext";
import { useState, useEffect } from "react";
import TodayWeatherToggle from "../TodayWeatherToggle/TodayWeatherToggle";
import cloudBG from '../../assets/Cloud-background.png'
import { MdMyLocation } from "react-icons/md";
import './TodayWeather.css'
import WeatherDetail from "../WeatherDetailContainer/WeatherDetail/WeatherDetail";

const TodayWeather = () => {

    const [lattLong, setLattLong] = useState(null);
    const [ showMenu, setShowMenu] = useState(false);
    const { getWoeidFromLatLon, cityWeather } = useWeatherContext();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (pos) {
          setLattLong(`${pos.coords.latitude},${pos.coords.longitude}`);
        });
      }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    
    if (cityWeather){
        const { consolidated_weather } = cityWeather;

        const {
            applicable_date,
            the_temp,
            weather_state_name,
            weather_state_abbr,
        } = consolidated_weather[0];
        

        return(

            <aside className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-3 aside">
                        {showMenu && <TodayWeatherToggle toggleMenu={toggleMenu} />}

                        <div className="aside__location">
                            {/* SEARCH FOR PLACE */}
                            <button className="search-for-place" onClick={toggleMenu}>
                                Seach for places
                            </button>

                           {/* GET LOCATION */}
                            <button className="get-location-btn" onClick={() => getWoeidFromLatLon(lattLong)}>
                                <MdMyLocation />
                            </button>
                        </div>

                        {/* ICON */}
                        <div className="weather-icon">
                            <div className="weather-icon-bg" style={{ backgroundImage: `url(${cloudBG}` }}></div>
                            <img src={`https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`} alt={weather_state_name}/>
                        </div>

                        {/* TEMP */}
                        <div className="weather-temp-wrapper">
                            <h1 className="weather-temp">
                                <div className="weather-temp__font">
                                    {Math.floor(the_temp)}
                                    <span>°C</span>
                                </div>
                                <div className="fah temp" style={{display: 'none'}}>
                                    {(the_temp * (9 / 5) + 32).toFixed(1)}
                                    <span>°F</span>
                                </div>
                            </h1>
                        </div>

                        {/* Weather */}
                        <h3 className="weather-title">{weather_state_name}</h3>


                        {/* DAY and DATE */}
                        <div className="weather-dd">
                            <h5 className="weather-day">Today</h5>
                            <span style={{ margin: "0 10px" }}>•</span>
                            {/* <WeatherDate time={applicable_date} /> */}
                            {applicable_date}
                        </div>
                    </div>

                    <div className="col-md-9 col-lg-9">
                        <WeatherDetail/>
                    </div>
                </div>

            </aside>
          
        ) 
    } else {
        return <div>SIDEBAR</div>;
    }
}

export default TodayWeather