import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import { useState } from 'react'

const Sidebar = ({sidebarDisplay}) => {
const navigate = useNavigate()
  return (
    <div id='sidebar-container' className={sidebarDisplay}>
        <button id='home-button' onClick={()=>{navigate('/app/')}}></button>
        <button id='profile-button' onClick={()=>{navigate('/app/ownprofile')}}></button>
        <button id='shelters-button' onClick={()=>{navigate('/app/listofshelters')}}></button>
        <button id='about-us-button' onClick={()=>{navigate('/app/aboutus')}}></button>
    </div>
  )
}

export default Sidebar