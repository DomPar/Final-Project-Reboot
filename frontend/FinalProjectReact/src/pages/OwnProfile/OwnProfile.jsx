import { Link, useNavigate } from 'react-router-dom'
import './OwnProfile.css'
import SquarePicture from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import { getOwnUser, updateUserAvatar } from '../../services/userService';
import { useState, useEffect } from 'react';
import { getAllPostsByUser } from '../../services/postService';
import { updateUserDescription } from '../../services/userService';
import UploadWidget from '../../componentes/UploadWidget/UploadWidget';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/postService';

function OwnProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [avatar, setAvatar] = useState(user.avatar) //Necesitamos una funcion para mandar esto al usuario
  const [update, setUpdate] = useState(false)

  const [showTextBox, setShowTextBox] = useState(false)
  const [description, setDescription] = useState('')



  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleButtonClick = () => {
    setShowTextBox(!showTextBox)
  }

  useEffect(() => {
    const getProfile = async () => {
      const {result} = await getOwnUser(localStorage.getItem('email'))
        setUser(result)
      }
      getProfile()
  }, [update])

  useEffect(() => {
    const getPosts = async () => {
      const {result} = await getAllPostsByUser(user.id, user.name)
      console.log(result, "result")
      setPosts(result)
    }
    getPosts()
  }, [user]);

  useEffect(() => {
    sendAvatar()
  }, [avatar]);


  const displayPosts = () => {
    const result = posts.map((post) => {
      return (
        <div className="imagepost" style={{backgroundImage:`url(${post.media})`}} onClick={() => {navigate(`/app/viewpost/${post.id}`)}}></div>
      )
    })
    return result;
  }

  const sendDescription = async (e) => {
    const {result} = await updateUserDescription({description})
    return result;
  }

  const sendAvatar = async (e) => {
    const result = await updateUserAvatar({avatar})
    setUpdate(!update)
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
          <button id='edit-avatar'>
            <UploadWidget id='change-avatar-button' setter={setAvatar}/>
          </button>
        </div>
        <p id='description-user'>
          <h1>{user.name}</h1>
          {user.description}
        </p>
        <button id='edit-profile-user' onClick={handleButtonClick}>Edit Profile</button>
        <div>{showTextBox && (
          <form onSubmit={sendDescription}>
        <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Ingrese Description..." cols="30" rows="10"/>
        <button type='submit' id='submit-description-user'>Confirm Changes</button>
        </form>
        )}</div>

      </div>

    </div>
    
  )
}






export default OwnProfile