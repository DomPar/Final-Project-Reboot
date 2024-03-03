import HeaderBar from '../AppBar/HeaderBar'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
  return (
    <div id='header-container'>
      <div id="sidebar-button-container">
        <div id="sidebar-button">
          <MenuRoundedIcon fontSize='large'/>
        </div>
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