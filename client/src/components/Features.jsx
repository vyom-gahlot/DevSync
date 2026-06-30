import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '../assets/assets'
import './Features.css'

const Features = () => {
  return (
    <div>
      <div className="features-header">
        <h2>Real-time collaboration, built for developers</h2>
        <p>Everything you need to code together — fast and synced.</p>
      </div>

      <div className='features-grid'>
        {features.map((feature)=>(
          <FeatureCard key={feature.id} feature={feature}/>
        ))}
      </div>
      
    </div>
  )
}

export default Features
