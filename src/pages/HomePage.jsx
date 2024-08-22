import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className=" w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to WeatherApp</h1>
        <p className="text-lg text-center mb-6">
          Get accurate and up-to-date weather forecasts for any location around the world.
        </p>
        <p className="text-center mb-6">
          Enter your location to see the current weather and forecast for the upcoming days.
        </p>
        <div className="flex justify-center">
          <Link
            to="/search"
            className="bg-neutral text-white py-2 px-4 rounded-lg hover:bg-black-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
