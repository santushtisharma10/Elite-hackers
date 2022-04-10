import { Card, CardContent, IconButton } from '@material-ui/core'
import React from 'react'
import {ProductCard} from "react-ui-cards"
import {data} from "./StartupData"
import {AddBox} from "@material-ui/icons"

function StartupCard() {

  const getStartup = data => data.slice(0,3).map((item, id)=> {

    return (

      <ProductCard
      photos={item.photoArr}
    
      productName={item.productName}
      description={item.description}
      buttonText='Explore More'
      // url='https://github.com/nukeop'
  />

    )
  })
  return (
    <div style={{display: "flex"}}>
       {getStartup(data)}
       <div style={{ margin: "0 auto", marginTop: "auto", marginBottom: "auto" }}>
                <IconButton >
                    <AddBox style={{ fontSize: "5rem" }} />
                </IconButton>
            </div>
    </div>
  )
}

export default StartupCard