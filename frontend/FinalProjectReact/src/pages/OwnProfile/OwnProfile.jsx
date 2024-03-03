import { Link, useNavigate } from 'react-router-dom'
import './OwnProfile.css'
import StandardImageList from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import { getOwnUser } from '../../services/userService';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { getAllPostsByUser } from '../../services/postService';

function OwnProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getProfile = async () => {
      const {result} = await getOwnUser(localStorage.getItem('email'))
        setUser(result)
      }
      getProfile()
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const {result} = await getAllPostsByUser(user.id, user.name)
      setPosts(result)
    }
    getPosts()
  }, [user]);

  const displayPosts = () => {
    const result = posts.map((post) => {
      return (
        <div className="imagepost" style={{backgroundImage:`url(${post.media})`}}></div>
      )
    })
    return result;
  }
  
  return (
    <div id='profile-container' >
      <div id='square-pictures'>
        <button onClick={() => {navigate('/app/newpost')}} id='new-post-button'>New Post 🐾</button>
        <div id="post-pictures">
          {displayPosts()}
        </div>
      </div>

      <div id='profile-description'>
        <div id="profile-avatar" style={{backgroundImage: `url(${user.avatar})`}}>
          <button id='edit-avatar'><EditIcon/></button>
        </div>
        <p id='description-user'>
          <h1>{user.name}</h1>
          {user.description}
          </p>
        <button id='edit-profile'>Edit Profile</button>
      </div>

    </div>
    
  )
}






export default OwnProfile