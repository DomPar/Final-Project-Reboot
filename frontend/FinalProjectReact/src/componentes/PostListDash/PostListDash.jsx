import './PostListDash.css'
import PostCard from '../PostCard/PostCard';

const listPost = () => {
    const result = arrayPost.map((post) => {
        return post;
    })
    return result;
}

const arrayPost = [
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>,
    <PostCard/>
  ]

const PostListDash = () => {
  return (
    <div id='postlist-container'>
        <div id="post-feed">
            {listPost()}
        </div>
    </div>
  )
}

export default PostListDash