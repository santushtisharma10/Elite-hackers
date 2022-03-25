import React from 'react'
import { Card, CardMedia, CardContent } from '@material-ui/core'
import {TaggedContentCard} from "react-ui-cards"

function CourseCard({img, key, details}) {
    return (
        <div >
            <TaggedContentCard
    href='https://github.com/nukeop'
    thumbnail='https://image.shutterstock.com/image-vector/microblog-platform-abstract-concept-vector-600w-1852998859.jpg'
    title='Frontend Development'
    description='become a frontend developer'
    tags={[
        'html',
        'css',
        'js'
    ]}
/>

        </div>
    )
}

export default CourseCard