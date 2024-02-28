import HeartsRating from '../HeartsRating/HeartsRating'
import './PostCard.css'

const PostCard = () => {
  return (
    <div id="postcard-container">
        <div id="postcard-img">
        <div id="postcard-rating">
              <HeartsRating/>
        </div>
        </div>
        <div id="portcard-title">Titulo</div>
        
    </div>
  )
}

export default PostCard