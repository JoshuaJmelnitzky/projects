import { useState } from 'react'
import { MdOutlineClose, MdSearch } from "react-icons/md";
import { useWeatherContext } from "../../Context/WeatherContext";
import './TodayWeatherToggle.css'

const TodayWeatherToggle = ({toggleMenu}) => {
    const [locationSearch, setLocationSearch] = useState('');
    const { getWoeidFromLocation } = useWeatherContext();

    const searchPlaceHandler = (e) => {
        e.preventDefault();
        if(locationSearch.trim() === '' || locationSearch.length > 0){
          getWoeidFromLocation(locationSearch);
        }
        setLocationSearch('');
    };
 
    return (
        
        <div className="sidebar-menu">
            <div className="close-menu-wrapper">
                <button className="menu-closed" onClick={toggleMenu}>
        
                    <MdOutlineClose />
                </button>
            </div>
    
            {/* SEARCH FOR PLACE */}
            <form className="search-place-form" onSubmit={searchPlaceHandler}>
                <label htmlFor="search-location">
                    <MdSearch />
                    Seach for places
                </label>

                <input type="text" placeholder="search location" id="search-location" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)}/>

                <button type="submit" className="submit-btn">
                    Search
                </button>
            </form>
        </div>
    )
}

export default TodayWeatherToggle