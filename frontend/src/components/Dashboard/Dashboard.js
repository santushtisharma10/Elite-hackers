import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div>
        <Sidebar />
      </div>
      <div >
        Main Content
      </div>
      <div >
        Profile Section
      </div>
    </div>
  )
}

export default Dashboard