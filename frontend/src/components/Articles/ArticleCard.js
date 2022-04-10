import React from 'react'
import {NewsHeaderCard} from "react-ui-cards"
import {data} from "./ArticleData"
import {IconButton} from "@material-ui/core"
import {AddBox} from "@material-ui/icons"

function ArticleCard() {

  const getArticle = data => data.slice(0,2).map((item, id)=> {

    return (
      <NewsHeaderCard
    href={item.url}
    thumbnail={item.thumbnail}
    title={item.title}
    author={item.author}
    date={item.date}
/>
    )
  })
  return (
    <div style={{display: "flex"}}>
      {getArticle(data)}

      <div style={{ margin: "0 auto", marginTop: "auto", marginBottom: "auto" }}>
                <IconButton >
                    <AddBox style={{ fontSize: "5rem" }} />
                </IconButton>
            </div>
    </div>

  )
}

export default ArticleCard