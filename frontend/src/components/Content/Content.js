import React from 'react'
import "./Content.css"
import CarouselCard from '../ProgressCards/Carousels'
import InfoCard from '../ProgressCards/InfoCard'
import { Grid } from '@material-ui/core'
import CourseCard from '../Courses/CourseCard'
import StartupCard from '../Startup/StartupCard'
import MentorCard from '../Mentors/MentorCard'
import ArticleCard from '../Articles/ArticleCard'

function Content() {
    return (
        <div className='content'>
            <br/><br />
            <h2>Welcome to Dashboard</h2>
            <br/>
            <div className='content__header'>
                <div className='header__carousel'>
                    {/* <CarouselCard /> */}

                    <CarouselCard />
                </div>
                <div className='header__info'>

                    <InfoCard />
                    <InfoCard />
                </div>
                    {/* <InfoCard />
                    <InfoCard /> */}
                
            </div>
            <div className='default__content'>

                <h4>Courses</h4>
                <CourseCard />
                 <StartupCard />
                 <MentorCard />
                  <ArticleCard />
            </div>
        </div>
    )
}

export default Content
