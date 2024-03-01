import React from 'react'
import './ViewPost.css'
import CustomizedRating from '../../componentes/HeartsRating/HeartsRating' 
import SizeAvatars from '../../componentes/SizeAvatars/SizeAvatars'
function ViewPost() {
  return (
    <div id='post-container'>
        
        <div id='picture-hearts'>
            <div id='picture'>
                <img src="" alt="Picture"/>
            </div>
            <CustomizedRating/>
        </div>
        <div id='title-description'>
        <SizeAvatars/>
        <div id='title'> Title </div>
        <div id='description'> Description </div>
        </div>
    </div>
  )
}

export default ViewPost