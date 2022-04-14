import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodayWeather from './Components/TodayWeather/TodayWeather';
import { WeatherContextProvider } from './Context/WeatherContext';


function App() {

  return (
    
    <WeatherContextProvider>

        <TodayWeather/>

    </WeatherContextProvider>


    
  );
}

export default App;


