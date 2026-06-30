import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({feature}) => {

    const { title, subtitle, image, id } = feature; 

  return (
    <div className='feature-card'> 
    <div className='feature-heading'>
        <img src={image} className='feature-image' alt="" />
        <h5 className='feature-title'>{title}</h5>
    </div>
    <div className='feature-text'>
        <p>{subtitle}</p>
    </div>
      
    </div>
  )
}

export default FeatureCard
