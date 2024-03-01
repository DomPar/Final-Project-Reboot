import { Link } from 'react-router-dom'
import './OwnProfile.css'
import StandardImageList from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'

function OwnProfile() {
  return (
  
    <div id='profile-container' >
      <div id='square-pictures'>
        <Link to="/app/newpost">
        <button>New Post</button>
        </Link>
      <StandardImageList/>
      </div>

      <div id='profile-description'>
        <CardLayers3d/>
        <p id='description-user'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
        <button id='edit-profile'>Edit Profile</button>
      </div>

    </div>
    
  )
}






export default OwnProfile