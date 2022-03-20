import React from 'react'
import InfoCard from './InfoCard'

function Content() {
  return (
    <div className='content'>
        <div className='content__title'>
            <h1>Welcome to dashboard</h1>
        </div>
        <div className='content__info-card'>
            <InfoCard />
            <InfoCard />
            <InfoCard />
        </div>
    </div>
  )
}

export default Content