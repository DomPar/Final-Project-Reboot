import React from 'react'
import './ViewPost.css'
import CustomizedRating from '../../componentes/HeartsRating/HeartsRating' 
import SizeAvatars from '../../componentes/SizeAvatars/SizeAvatars'
function ViewPost() {
  return (
    <div id='detailed-post-container'>
        
        <div id='detailed-post-picture'>
                <img src="" alt="Picture"/>
        </div>
        <div id='detailed-post-hearts'>
          <CustomizedRating/>
        </div>
        <div id='detailed-post-avatar'>
        </div>
        <div id='detailed-post-title'> Title </div>
        <div id='detailed-post-description'> Description </div>
    </div>
  )
}

export default ViewPost