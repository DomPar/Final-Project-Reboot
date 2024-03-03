import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div id='sidebar-container' style={{display:'none'}}>
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