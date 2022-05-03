import { Avatar, Card, CardContent } from '@material-ui/core'
import React from 'react'
import {data} from "./MentorData"
import UserCard from './UserCard'
// import UserCard from "react-ui-cards"
import Topbar from '../../New/components/topbar/Topbar'
import Sidebar from '../../New/components/sidebar/Sidebar'


function MentorCard() {

  const getMentors = data => data.map((item, key)=> {

    return(
      
    // <UserCard
    // float
    // href='/'
    // header='https://i.imgur.com/vRAtM3i.jpg'
    // avatar='https://i.imgur.com/XJxqvsU.jpg'
    // name={item.name}
    // positionName={item.designation} />

<UserCard />
//open modal on clicking profile card
    )

  })
  return (
    <div >
    <Topbar />
    <div className="container-fluid">
      <div className="sidebaar">
      <Sidebar />
      </div>
      <div className='home'>
     
        <div className='mentor'>
        {getMentors(data)}
        </div>
      
      
      </div>
    </div>
  </div>
   
  )
}

export default MentorCard