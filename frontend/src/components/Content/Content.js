import React from 'react'
import InfoCard from './InfoCard'
import "./Content.css"
import CourseCard from './CourseCard'
import ArticleCard from './ArticleCard'

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
        <div className='content__recent'>
            {/* recent courses visited if any else trending courses */}
            <div className='content__courses'>
                <h3>Trending Courses</h3>
                <br />
                <CourseCard />
            </div>
            {/* recent articles read if any else trending articles */}
            <div className='content__article'>
                <h3>Trending Articles</h3>
                <br />
                <ArticleCard />
            </div>
        </div>
    </div>
  )
}

export default Content