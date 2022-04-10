import React from 'react'
// import { Card, CardMedia, CardContent } from '@material-ui/core'
import { TaggedContentCard } from "react-ui-cards"
import { data } from "./CourseData"
import "./Course.css"
import { AddBox } from "@material-ui/icons"
import { IconButton } from '@material-ui/core'

function CourseCard({ img, key, details }) {

    const getCourses = data => data.slice(0, 3).map((item, key) => {
        return (
            <TaggedContentCard
                href='https://github.com/nukeop'
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                tags={item.tags} />
        )

    })
    return (
        <div style={{ display: "flex" }}>
            {console.log(data)}
        
            {getCourses(data)}
            <div style={{ margin: "0 auto", marginTop: "auto", marginBottom: "auto" }}>
                <IconButton >
                    <AddBox style={{ fontSize: "5rem" }} />
                </IconButton>
            </div>



        </div>
    )
}

export default CourseCard