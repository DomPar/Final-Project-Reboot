import React from 'react'
import './ViewPost.css'
import CustomizedRating from '../../componentes/HeartsRating/HeartsRating' 
import SizeAvatars from '../../componentes/SizeAvatars/SizeAvatars'
import { useState, useEffect} from 'react'
import { getOnePost } from '../../services/postService'

function ViewPost() {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    const getPost = async () => {
      const {result} = await getOnePost()
      setPost(result)
      }
      getPost()
  }, []);
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