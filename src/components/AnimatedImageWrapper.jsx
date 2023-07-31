import React from 'react'
import landingImage from '../assets/photo_2023-07-30_21-37-58.jpg'
const AnimatedImageWrapper = () => {
  return (
    <div className="relative w-64 h-64 overflow-hidden border border-gray-500 rounded-lg transition-transform duration-300 transform-gpu hover:scale-110">
        <img className='rounded-lg border-' src={landingImage} alt="/"/>
    </div>
  )
}

export default AnimatedImageWrapper
