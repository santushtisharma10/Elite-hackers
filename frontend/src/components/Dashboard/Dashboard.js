import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Navbar from "../Home/Navbar"

function Dashboard() {
  return (
    <div className='dashboard'>
      {/* <Navbar /> */}
      {/* <div className='dashboard__sidebar'>
        <Sidebar />
      </div>
      <div className='dashboard__content'>
        <Content />
      </div>
      <div >
        Profile Section
      </div> */}
        {/* <Navbar /> */}
        
        <br/>
        <Sidebar />
        <div className='dashboard__progress'>
          
          <Content />
        </div>
        
      
    </div>
  )
}

export default Dashboard