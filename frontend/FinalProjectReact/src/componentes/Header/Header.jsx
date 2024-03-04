import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState, useEffect } from 'react';
import { getOwnUser } from '../../services/userService';
import { getOwnShelter } from '../../services/shelterService';

const Header = ({setter}) => {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState({})
  const [shelter, setShelter] = useState({})
  const [avatar, setAvatar] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      if (localStorage.getItem('role') === 'user') {
        const {result} = await getOwnUser(localStorage.getItem('email'))
        setUser(result)
      }
      if (localStorage.getItem('role') === 'manager') {
        const {result} = await getOwnShelter(localStorage.getItem('id'))
        setShelter(result)
      }
      }
      getProfile()
  }, []);

  useEffect(() => {
    if (localStorage.getItem('role') === 'user') {
      setAvatar(user.avatar)
      console.log(user.avatar)
    }
    if (localStorage.getItem('role') === 'manager') {
      setAvatar(shelter.avatar)
    }
  }, [user, shelter]);

  const handleClick = () => {
    if (toggle === false) {
      setter('visible')
      setToggle(!toggle)
    } else {
      setter('hidden')
      setToggle(!toggle)
    }
  }

  const handleProfile = () => {
    if (localStorage.getItem('role') === 'user') {
      navigate('/app/ownprofile')
    }
    if (localStorage.getItem('role') === 'manager') {
      navigate(`/app/shelterownprofile/${localStorage.getItem('id')}`)
    }
  }
  let URL = ""
  const handleHome = () => {
    
    if (localStorage.getItem('role') === 'user') {
      URL ='/app'
    }
    if (localStorage.getItem('role') === 'manager') {
      URL = `/app/shelterownprofile/${localStorage.getItem('id')}`
    }
    console.log(URL)
  }
  handleHome()


  return (
    <div id='header-container'>
      <div id="sidebar-button-container">
        <button id="sidebar-button" onClick={handleClick}>
          <MenuRoundedIcon fontSize='large'/>
        </button>
      </div>

      <div id="header-logo-container">
        <Link to ={URL}>
        <div id="header-logo">
        </div>
        </Link>
      </div>   

      <div id="header-titulo">
        
      </div>
      <div id="link-profile">
        <button id='profile-button' style={{backgroundImage:`url(${avatar})`}} onClick={handleProfile}>
         {/*  <img id='profile-button-photo' src={user.avatar} /> */}
        </button>
      </div>
    </div>
  )
}

export default Header