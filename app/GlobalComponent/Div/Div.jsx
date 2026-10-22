import React from 'react'
import './Div.css'

function Div({children}) {
  return (
    <div className='main_container'>
        {children}
    </div>
  )
}

export default Div
