import React from 'react'
import './ViewPost.css'
import CustomizedRating from '../../componentes/HeartsRating/HeartsRating' 
import SizeAvatars from '../../componentes/SizeAvatars/SizeAvatars'
import { useState, useEffect} from 'react'
import { getOnePost } from '../../services/postService'
import { useParams } from 'react-router-dom'
import { getOneUser } from '../../services/userService'

function ViewPost() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState({});
  const id = useParams()

  useEffect(() => {
    const getPost = async () => {
      const {result} = await getOnePost(id.postId)
      setPost(result)
    }
    getPost()
  }, []);

  
/*   useEffect(() => {
    const getUser = async () => {

      const {result} = await getOneUser(userId) //localStorage.getItem('id')
      setUser(result)
      }
       getUser()
  }, [post]); */

  return (
    <div id='detailed-post-container'>
        <div id='detailed-post-picture'>
          <img src={post.media} alt="Picture"/>
        </div>
        <div id='detailed-post-hearts'>
          <CustomizedRating/>
        </div>
        <div id='detailed-post-avatar'>
          <img src={post.user?.avatar} alt="Avatar" />
        </div>
        <div id='detailed-post-title'> <h1>{post.title}</h1> </div>
        <div id='detailed-post-description'> {post.description} </div>
        <div id="bg-viewpost"></div>
    </div>
  )
}

export default ViewPost