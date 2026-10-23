"use client"
import { useState } from 'react'
import './Paragraph.css'

function Paragraph({ text }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='paragraph-container'>

      <p className={`paragraph ${!isExpanded ? 'truncated' : ''}`}>
        {text}
      </p>
      
      {/* Toggle Button */}
      <button 
        className='read-more-btn' 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

    </div>
  )
}

export default Paragraph