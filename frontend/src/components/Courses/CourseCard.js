import React from 'react'
import { Card, CardMedia, CardContent } from '@material-ui/core'

function CourseCard({img, key, details}) {
    return (
        <div className='course__card'>
            <Card >
                
                <img height="150px" src={img}/>
                <CardContent>
                    <h5>
                    {details}
                    </h5>
                </CardContent>
            </Card>
        </div>
    )
}

export default CourseCard