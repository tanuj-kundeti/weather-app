// import React, { useState } from 'react'
import Search from '../components/Search'
import PropTypes from 'prop-types'
import LocationResults from '../components/LocationResults'

function SearchPage({location}) {
  // const [location,SetLocation]=useState([]);

  return (
    <div className="">
      <div className='flex flex-col justify-start h-full'>
        <Search/> 

       <LocationResults/>
      </div>
    </div>
  )
}

SearchPage.defaultProps={
  location:"Bloomington",
}

SearchPage.prototype={
  location:PropTypes.string,
}
export default SearchPage;
