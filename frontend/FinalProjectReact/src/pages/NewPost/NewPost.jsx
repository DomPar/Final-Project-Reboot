import './NewPost.css'
import {createPost} from '../../services/postService.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UploadWidget from '../../componentes/UploadWidget/UploadWidget.jsx'


function NewPost() {
const[media, setMedia] = useState('')
const[title, setTitle]= useState('')
const[description, setDescription]= useState('')
const handlePicture = (e) => {
  const picture = e.target.files[0]
  console.log(picture)
  setMedia(picture)
}

const create = async () => {
const sendPost = await createPost({media, title, description})

}
  return (
    <div id='newpostcontainer'>
      <input type="file" id='addpictures' accept="image/*" onChange={handlePicture}/>
      <UploadWidget setter={setMedia}/>
      {/* <img id='myphoto' src={media ? URL.createObjectURL(media) : ''} alt="MyPhoto"/> */}
      <textarea name="POST'S DESCRIPTION" id="textdescription" cols="30" rows="10" placeholder='Add Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
      <textarea name="ADD TITLE" id="titledescription" cols="30" rows="10" placeholder='Add title...' onChange={(e) => setTitle(e.target.value)}></textarea>
      <Link to='/app/'>
      <button id='submit' onClick= {create}>Submit</button>
      </Link>
    </div>
  )
}

export default NewPost