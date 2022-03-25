import { Avatar, Card, CardContent } from '@material-ui/core'
import React from 'react'
import {data} from "./MentorData"
import {UserCard} from "react-ui-cards"

function MentorCard() {

  const getMentors = data => data.map((item, key)=> {

    return(
        // <Card className="mentor__card">    
        //     <br />    
        //     <Avatar style={{margin: "auto"}}>R</Avatar>
        //     <br />
        //     <hr />
        //     {console.log(data)}
        //     <CardContent style={{alignContent: "center"}}>
        //         <h3>{item.name}</h3>
        //         <h5>{item.designation}</h5>
        //         <p>{item.description}</p>
        //     </CardContent>
        
        // </Card>
        <UserCard
    float
    href='/'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name={item.name}
    positionName={item.designation}
/>
    )

  })
  return (
    <div>
        {/* data.map(())
        <Card className="mentor__card">
            <br/>
            <Avatar style={{margin: "auto"}}>R</Avatar>
            <br />
            <hr />
            {console.log(data)}
            <CardContent>
                <h3>{data.name}</h3>
                <h5>{data.designation}</h5>
                <p>{data.description}</p>
            </CardContent>
        </Card> */}
        {getMentors(data)}
    </div>
  )
}

export default MentorCard