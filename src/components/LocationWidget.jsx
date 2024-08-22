import React from 'react'

function LocationWidget({place,state}) {
  return (
    <div className='stat shadow rounded-3xl px-auto m-auto my-2 '>
      <div className="stat">
        
        <div className="stat-value ">{place}</div>
        <div className="stat-title">{state}</div>
      </div>
    </div>
  )
}

LocationWidget.defaultProps={
  place:'Bloomington',
  state:'Indiana',
}


export default LocationWidget
