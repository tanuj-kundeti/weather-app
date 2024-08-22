import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Weather_icon from '../Icons/weather_icon.jpg'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <Link to='/'>
                    <img src={Weather_icon} alt="weather-icon" className='inline text-3xl w-12 h-12 mr-3 rounded-full' />
                </Link>
                <Link to="/" className='text-lg font-bold align-middle'>{title}</Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                    <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps={
    title:"Weather App",
}

Navbar.propTypes={
    title:PropTypes.string,
}


export default Navbar
