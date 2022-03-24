import { useWeatherContext } from "../../Context/WeatherContext";
import { useState } from "react";


const TodayWeatherToggle = () => {

    const [locationSearch, setLocationSearch] = useState('');

    const { getWoeidFromLocation, cityWeather } = useWeatherContext();

    const searchPlaceHandler = (e) => {
        e.preventDefault();
        if(locationSearch.trim() === '' || locationSearch.length > 0){
          getWoeidFromLocation(locationSearch);
        }
        setLocationSearch('');
    };
    
    
    if (cityWeather){
        const { consolidated_weather } = cityWeather;

        const {
            applicable_date,
            the_temp,
            weather_state_name,
            weather_state_abbr,
        } = consolidated_weather[0];
        

        return(
            <>
            { Math.floor(the_temp) } 
            <div>
                { applicable_date } 
            </div>

            <div>
                { weather_state_name }
            </div>
            { weather_state_abbr }
            </>
        )
          
    }

  
  return (
    <div className="sidebar-menu">
        <div className="close-menu-wrapper">

        </div>

        <div>
    

        </div>

        {/* SEARCH FOR PLACE */}
        <form className="search-place-form" onSubmit={searchPlaceHandler}>
            <label htmlFor="search-location">

                Seach for places
        
            </label>
            <input
                type="text"
                placeholder="search location"
                id="search-location"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
         
            />
            <button type="submit" className="submit-btn">
                Search
            </button>
        

        </form>
    </div>
  )
}

export default TodayWeatherToggle