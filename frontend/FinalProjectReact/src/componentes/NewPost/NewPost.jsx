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
    <div id='newpostcontainer'>
      <div id="add-picture-container">
        <div id="add-picture-button">
          <UploadWidget id='add-picture-button' setter={setMedia}/>
        </div>
      </div>
      <div id="media-container">
        <img id='media' src={media} alt="MyPhoto"/>
      </div>
      <textarea name="ADD TITLE" id="titledescription" cols="30" rows="10" placeholder='Add title...' onChange={(e) => setTitle(e.target.value)}></textarea>
      <textarea name="POST'S DESCRIPTION" id="textdescription" cols="30" rows="10" placeholder='Add Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
      <div id="submit-container">
        <div id="submit-button">
          <button id='submit' onClick= {create}>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default NewPost