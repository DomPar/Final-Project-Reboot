import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState, useEffect } from 'react';
import { getOwnUser } from '../../services/userService';

const Header = ({setter}) => {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const {result} = await getOwnUser(localStorage.getItem('email'))
      setUser(result)
      }
      getProfile()
  }, []);

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
        <button id='profile-button' style={{backgroundImage:`url(${user.avatar})`}} onClick={()=>{navigate('/app/ownprofile')}}>
          {/* <img id='profile-button-photo' src={user.avatar} />  */}
        </button>
      </div>
    </div>
  )
}

export default Header