import { Link, useNavigate } from 'react-router-dom'
import './OwnProfile.css'
import StandardImageList from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'

function OwnProfile() {
  const navigate = useNavigate();
  
  
  return (
    <div id='profile-container' >
      <div id='square-pictures'>
        <button onClick={() => {navigate('/app/newpost')}} id='new-post-button'>New Post 🐾</button>
        <StandardImageList/>
      </div>

      <div id='profile-description'>
        <div id="profile-avatar"></div>
        <p id='description-user'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
        <button id='edit-profile'>Edit Profile</button>
      </div>

    </div>
    
  )
}






export default OwnProfile