import React from 'react'

import './Banner.css'
function Banner({ 
    src = "http://www.pakgum.com/IMG/Sampling.jpg"
 }) {


  return (
      <div className="quality-image-wrapper">
          <img 
            className='quality-process-img'
            src= { src }
          />
        </div>
  )
}

export default Banner
