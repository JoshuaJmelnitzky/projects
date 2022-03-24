import { useEffect } from 'react';
import './App.css';
import TodayWeatherToggle from './Components/TodayWeatherToggle/TodayWeatherToggle';
import { WeatherContextProvider } from './Context/WeatherContext';



function App() {

  return (
    
    <WeatherContextProvider>

        <TodayWeatherToggle/>

    </WeatherContextProvider>


    
  );
}

export default App;


