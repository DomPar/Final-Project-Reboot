import './NewPost.css'
import {createPost} from '../../services/postService.js'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UploadWidget from '../../componentes/UploadWidget/UploadWidget.jsx'


function NewPost() {
    const navigate = useNavigate()
    
    const[media, setMedia] = useState('')
    const[title, setTitle]= useState('')
    const[description, setDescription]= useState('')

    const create = async () => {
    const sendPost = await createPost({media, title, description})
    navigate('/app')
}
  return (
    <div id="new-post-container">
      <div id='newpostcontainer'>
          <div id="add-picture-container">
            <div id="add-picture-button">
              <UploadWidget id='add-picture-button' setter={setMedia}/>
            </div>
          </div>
          <div id="media-container">
            <img id='media' src={media} alt="My Photo"/>
          </div>
          <textarea name="POST'S DESCRIPTION" id="textdescription" cols="30" rows="10" placeholder='Add Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
          <textarea name="ADD TITLE" id="titledescription" cols="30" rows="10" placeholder='Add title...' onChange={(e) => setTitle(e.target.value)}></textarea>
          <div id="share-container">
            <div id="share-button">
              <button id='share' onClick= {create}>Share</button>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default NewPost