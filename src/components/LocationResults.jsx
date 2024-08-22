import React,{useContext} from 'react'
import LocationWidget from './LocationWidget'
import WeatherContext from '../context/WeatherContext'
import { Link } from 'react-router-dom'

function LocationResults() {

    // const [location,setLocation]=useState([])
    // const [loading,setLoading]=useState(true)


    // const fetchLocations=async()=>{
    //     const response=await fetch(`${process.env.REACT_APP_WEATHER_URL}/geo/1.0/direct?q=bloomington&limit=10&appid=${process.env.REACT_APP_WEATHER_APPID}`)

    //     const data=await response.json()
        
    //     setLocation(data)
    //     setLoading(false)
    // }


    const {location,loading}=useContext(WeatherContext)

    // useEffect(()=>{
    //     fetchLocations()
    // },[])

  
    if(!loading && location.length>0){
        return (
        <div className='m-auto p-auto'>
            {location.map((place)=>(
                <Link to={`/location/${place.lat}/${place.lon}`}>
                     <LocationWidget key={place.lat} place={place.name} state={place.state}/>
                </Link>
            ))}
        </div>
        )
    }
}

export default LocationResults
