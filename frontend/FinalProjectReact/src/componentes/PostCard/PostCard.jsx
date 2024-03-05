import HeartsRating from '../HeartsRating/HeartsRating'
import './PostCard.css'
import { Link, useNavigate } from 'react-router-dom'
const PostCard = ({title, media, postId, userId}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/app/viewpost/${postId}`)
  }
  return (
    <div id="postcard-container">
        <div id="profile-picture"></div>
        <div id="postcard-img" style={{backgroundImage:`url(${media})`}} onClick={handleClick}></div>
        <div id="postcard-rating"><HeartsRating/></div>
        <div id="portcard-title"><h1>{title}</h1></div>
        
    </div>
  )
}

export default PostCard