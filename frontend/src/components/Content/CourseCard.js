import React from 'react'
import { Card, CardMedia, CardContent } from '@material-ui/core'

function CourseCard() {
    return (
        <div className='course__card'>
            <Card >
                <img height="150px" src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4443160.jpg&fm=jpg"/>
                <CardContent>
                    <h5>
                        Lorem Ipsum Text
                    </h5>
                </CardContent>
            </Card>
        </div>
    )
}

export default CourseCard