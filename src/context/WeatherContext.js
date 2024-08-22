import { createContext,useState,useEffect } from "react";

const WeatherContext=createContext()

const WEATHER_URL=process.env.REACT_APP_WEATHER_URL;
const WEATHER_APPID=process.env.REACT_APP_WEATHER_APPID;

export const WeatherProvider= ({children})=>{
    const [search,setSearch] =useState('')
    const [loading,setLoading]=useState(true)
    const [location,setLocation]=useState([])
    const [coords,setCoords]=useState({lat:0,lon:0})
    const [currentWeatherData,setCurrentWeatherData]=useState([])
    const [forecastData,setForecastData]=useState([])
    const [metric,setMetric]=useState(false)

    const fetchLocations=async()=>{
        const response=await fetch(`${WEATHER_URL}/geo/1.0/direct?q=${search}&limit=15&appid=${WEATHER_APPID}&units=${metric}`)

        const data=await response.json()
        
        setLocation(data)
        setLoading(false)
    }

    const fetchCurrentWeather=async()=>{
        const response1=await fetch(`${WEATHER_URL}/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_APPID}&units=${metric&&'metric'||'imperial'}`)
        const data1=await response1.json();

        setCurrentWeatherData(data1)
        setLoading(false)

    }

    const fetchForecast=async()=>{
        const response2=await fetch(`${WEATHER_URL}/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_APPID}&units=${metric&&'metric'||'imperial'}`)
        const data2=await response2.json()
        setForecastData(data2)
        setLoading(false)
    }

    useEffect(()=>{
        fetchLocations()
    },[search,metric])

    useEffect(()=>{
        fetchCurrentWeather();
        fetchForecast();
    },[coords,metric])


    return <WeatherContext.Provider value={{search,setSearch,loading,location,setLocation,fetchLocations,coords,setCoords,currentWeatherData,forecastData,metric,setMetric}}>
        {children}
    </WeatherContext.Provider>

}

export default WeatherContext;



