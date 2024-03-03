import HeaderBar from '../AppBar/HeaderBar'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

const Header = ({setter}) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    if (toggle === false) {
      setter('visible')
      setToggle(!toggle)
    } else {
      setter('hidden')
      setToggle(!toggle)
    }
    console.log(toggle)
  }
  return (
    <div id='header-container'>
      <div id="sidebar-button-container">
        <button id="sidebar-button" onClick={handleClick}>
          <MenuRoundedIcon fontSize='large'/>
        </button>
      </div>

      <div id="header-logo-container">
        <Link to='/app'>
        <div id="header-logo">
        </div>
        </Link>
      </div>   

      <div id="header-titulo">
        
      </div>
      <div id="link-profile">
        <Link to='/app/ownprofile'><div id='profile-button'></div></Link>
      </div>
    </div>
  )
}

export default Header