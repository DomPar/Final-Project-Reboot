import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id='header-container'>
      <Link to='/'>
      <div id="header-logo"></div>
      </Link>
      <div id="header-navbar">
          <div className="header-nav-button"></div>
          <div className="header-nav-button"></div>
          <div className="header-nav-button"></div>
          <Link to="/ownprofile">
          <div id='profile-button'></div>
          </Link>
      </div>
    </div>
  )
}

export default Header