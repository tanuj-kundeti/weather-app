import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSnowflake, faSun, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

function getWeatherIcon(weather) {
  switch (weather) {
    case 'Clear':
      return faSun;
    case 'Clouds':
      return faCloud;
    case 'Rain':
      return faCloudRain;
    case 'Snow':
      return faSnowflake;
    case 'Partly Cloudy':
    default:
      return faCloudSun;
  }
}

function LocationDetails() { // Removed default parameters here
  const { lat, lon } = useParams(); // Use `useParams` to get lat and lon from the URL
  const { setCoords, currentWeatherData, forecastData, metric, setMetric } = useContext(WeatherContext);

  useEffect(() => {
    if (lat && lon) {
      setCoords({ lat: parseFloat(lat), lon: parseFloat(lon) });
    }
  }, [lat, lon, setCoords]);

  // Ensure forecastData and forecastData.list are defined before using reduce
  const groupedByDate = (forecastData?.list || []).reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toISOString().split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // Extract dates and sort
  const dates = Object.keys(groupedByDate).sort();

  // Handling Toggle
  const handleToggle = () => setMetric(!metric);

  return (
    <div className="p-4">
      <div className="WeatherClass  ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Weather in {currentWeatherData?.name || "Loading..."}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-center lg:m-10">
            <div className="text-6xl md:text-8xl flex items-center">
              {currentWeatherData?.main?.temp ? (
                <>
                  <span >{`${currentWeatherData.main.temp} ${metric ? '°C' : '°F'}`}</span>
                  <FontAwesomeIcon icon={getWeatherIcon(currentWeatherData.weather[0]?.main)} className="ml-4 inline" />
                </>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-center lg:m-10 mb-5">
            {currentWeatherData?.weather ? (
              <>
                <div className="text-lg mb-2">Summary: {currentWeatherData.weather[0]?.description}</div>
                <div className="text-lg mb-2">Humidity: {currentWeatherData.main?.humidity}%</div>
                <div className="text-lg">Wind Speed: {currentWeatherData.wind?.speed} {metric ? 'm/s' : 'mph'}</div>
              </>
            ) : (
              <span>Loading details...</span>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Weather Forecast
      </h2>
      <div className="flex justify-center md:justify-end mb-6">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Metric</span>
            <input type="checkbox" className="toggle" checked={!metric} onChange={handleToggle} />
            <span className="label-text ml-2">Imperial</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
        {dates.length > 0 ? (
          dates.map((date) => (
            <div key={date} className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
              <div className="stat">
                <div className="stat-title text-xl font-semibold text-center md:text-left mb-4">
                  {new Date(date).toLocaleDateString()}
                </div>
              </div>
              {groupedByDate[date].map((item) => (
                <div key={item.dt} className="stats stats-horizontal bg-gray-100 shadow-md rounded-lg mb-4 p-4 sm:w-full ">
                  <div className="stat flex-1">
                    <div className="stat-title text-base font-medium">
                      {new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="stat-value text-lg font-semibold">
                      {item.main.temp} {metric ? '°C' : '°F'}
                    </div>
                    <div className="stat-desc text-sm">
                      Feels Like: {item.main.feels_like} {metric ? '°C' : '°F'} <br />
                      Weather: {item.weather[0]?.description} <br />
                      Humidity: {item.main.humidity}% <br />
                      Wind: {item.wind.speed} {metric ? 'm/s' : 'mph'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <span>Loading forecast...</span>
        )}
      </div>
    </div>
  );
}

LocationDetails.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};

export default LocationDetails;
