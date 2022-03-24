import { useState, useContext, createContext  } from "react";

const apiURL = `https://the-ultimate-api-challenge.herokuapp.com/metaweather.com/api/location`;

const WeatherContext = createContext([]);

export function useWeatherContext() {
    return useContext(WeatherContext);
}

export const WeatherContextProvider = ({children}) => {

    const [cityWeather, setCityWeather] = useState('');

    const getWoeidFromLocation = (location) => {
        fetch(`${apiURL}/search/?query=${location}`)
          .then((res) => res.json())
          .then((data) => { console.log(data[0])
            if (data[0]) {
              fetchWoeidLocation(data[0].woeid);
              console.log(data[0].woeid)
            }
        });
    };


    const fetchWoeidLocation = (woied) => {
        fetch(`${apiURL}/${woied}`)
            .then((res) => res.json())
            .then((data) => {setCityWeather(data);
                console.log(data)
        });
    };

    return(
        <WeatherContext.Provider value = {{
            cityWeather,
            getWoeidFromLocation,
            fetchWoeidLocation}}>
          

            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;