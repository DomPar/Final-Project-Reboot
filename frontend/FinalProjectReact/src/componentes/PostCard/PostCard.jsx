import HeartsRating from '../HeartsRating/HeartsRating'
import './PostCard.css'

const PostCard = ({title, media}) => {
  return (
    <div id="postcard-container">
        <div id="profile-picture"></div>
        <div id="postcard-img" style={{backgroundImage:`url(${media})`}}></div>
        <div id="postcard-rating"><HeartsRating/></div>
        <div id="portcard-title"><h1>{title}</h1></div>
        
    </div>
  )
}

export default PostCard