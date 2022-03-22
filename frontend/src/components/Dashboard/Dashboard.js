import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Rsidebar from '../Sidebar/Rsidebar';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboard__sidebar'>
        <Sidebar />
      </div>
      <div className='dashboard__content'>
        <Content />
      </div>
      <div className='dashboard_sidebar'>
       
        <Rsidebar />
      </div>
    </div>
  )
}

export default Dashboard