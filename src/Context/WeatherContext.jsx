import { useState, useContext, createContext, useEffect  } from "react";

const apiURL = `https://the-ultimate-api-challenge.herokuapp.com/metaweather.com/api/location`;

const WeatherContext = createContext([]);

export function useWeatherContext() {
    return useContext(WeatherContext);
}

export const WeatherContextProvider = ({children}) => {

    const [cityWeather, setCityWeather] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const getWoeidFromLocation = (location) => {
        setIsLoading(true);
        fetch(`${apiURL}/search/?query=${location}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]) {
              fetchWoeidLocation(data[0].woeid);
            }
        });
    };


    const fetchWoeidLocation = (woied) => {
        fetch(`${apiURL}/${woied}`)
            .then((res) => res.json())
            .then((data) => {
                setCityWeather(data);
                setIsLoading(false);
            });
    };  


    useEffect(() => {
            navigator.geolocation.getCurrentPosition(function (pos) {
            getWoeidFromLatLon(`${pos.coords.latitude},${pos.coords.longitude}`);
        });
      }, []);


    const getWoeidFromLatLon = (lattLong) => {
        setIsLoading(true);
        fetch(`${apiURL}/search/?lattlong=${lattLong}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]) {
              fetchWoeidLocation(data[0].woeid);
            }
        });
    };



    return(
        <WeatherContext.Provider value = {{
            cityWeather,
            isLoading,
            getWoeidFromLocation,
            fetchWoeidLocation,
            getWoeidFromLatLon}}>
          

            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;