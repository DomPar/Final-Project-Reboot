import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'

const Sidebar = ({sidebarDisplay}) => {
const navigate = useNavigate()
  return (
    <div id='sidebar-container' className={sidebarDisplay}>
        <button id='shelters-button' onClick={()=>{navigate('/app/listofshelters')}}></button>
        <div className="sidebar-nav-button"></div>
        <div className="sidebar-nav-button"></div>
        <div className="sidebar-nav-button"></div>
    </div>
  )
}

export default Sidebar