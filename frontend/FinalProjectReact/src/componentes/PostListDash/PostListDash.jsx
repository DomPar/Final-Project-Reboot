import './PostListDash.css'
import PostCard from '../PostCard/PostCard';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../services/postService';
import { Link, useNavigate } from 'react-router-dom'

const PostListDash = () => {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    const getPosts = async () => {
      const {result} = await getAllPosts()
        setPosts(result)
      }
      getPosts()
  }, []);

  const listPost = () => {
    const result = posts.map((post) => {
        return <PostCard title={post.title} media={post.media} userId={post.userId} postId={post.id}/>;
    })
    return result;
}

  return (
    <div id='postlist-container'>
        <div id="post-feed">
            {listPost()}
        </div>
    </div>
  )
}

export default PostListDash
