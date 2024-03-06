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
console.log(user)
  const id = useParams()

  useEffect(() => {
    const getPost = async () => {
      const {result} = await getOnePost(id.postId)
      setPost(result)
      localStorage.setItem('userId', post.userId)
    }
    getPost()
  }, []);

  const userId = localStorage.getItem('userId')
  
  useEffect(() => {
    const getUser = async () => {

      const {result} = await getOneUser(userId) //localStorage.getItem('id')
      setUser(result)
      }
       getUser()
  }, [post]);

  return (
    <div id='detailed-post-container'>
        
        <div id='detailed-post-picture'>
                <img src={post.media} alt="Picture"/>
        </div>
        <div id='detailed-post-hearts'>
          <CustomizedRating/>
        </div>
        <div id='detailed-post-avatar'>
          <img src={user?.avatar} alt="Avatar" />
        </div>
        <div id='detailed-post-title'> <h1>{post.title}</h1> </div>
        <div id='detailed-post-description'> {post.description} </div>
    </div>
  )
}

export default ViewPost