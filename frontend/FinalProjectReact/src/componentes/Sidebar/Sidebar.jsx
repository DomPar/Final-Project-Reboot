import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'

const Sidebar = ({sidebarDisplay}) => {
console.log(sidebarDisplay)
  return (
    <div id='sidebar-container' style={{visibility:`${sidebarDisplay}`}}>
        <Link to='/app/shelterprofile'>
        <div className="sidebar-nav-button"></div>
        </Link>
        <div className="sidebar-nav-button"></div>
        <div className="sidebar-nav-button"></div>
        <div className="sidebar-nav-button"></div>
    </div>
  )
}

export default Sidebar