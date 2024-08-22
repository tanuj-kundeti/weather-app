import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Weather App</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to see Weather Forecast  
      </p>
      <p className="text-lg text-gray-400">Version <span className='text-black'>1.0.0</span></p>
      <p className="text-lg text-gray-400">Layout By:
        <a href="" className="text-black"> Tanuj Kundeti</a>
      </p>
    </div>
  )
}

export default About
