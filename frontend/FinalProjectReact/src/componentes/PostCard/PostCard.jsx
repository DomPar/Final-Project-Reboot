import HeartsRating from '../HeartsRating/HeartsRating'
import './PostCard.css'

const PostCard = () => {
  return (
    <div id="postcard-container">
        <div id="postcard-img"></div>
        <div id="postcard-rating"><HeartsRating/></div>
        <div id="portcard-title"><h1>Titulo</h1></div>
        
    </div>
  )
}

export default PostCard