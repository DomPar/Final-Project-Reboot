import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './OwnProfile.css'
import StandardImageList from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'

function OwnProfile() {
  return (
  
    <div id='profile-container' >
      <div id='square-pictures'>
        <button>New Post</button>
      <StandardImageList/>
      </div>

      <div id='profile-description'>
        <CardLayers3d/>
        <p id='description'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
        <button id='edit-profile'>Edit Profile</button>
      </div>

    </div>
    
  )
}






export default OwnProfile