import PostListDash from '../../componentes/PostListDash/PostListDash'
import StandardImageList from '../../componentes/SquarePosts/SquarePosts'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div id="dashboard-container">
        <div id="main-feed">
          {/* <StandardImageList/> */}
          <PostListDash/>
        </div>
        <div id="weekly-title">
        <h4>Cutests pet ofs the week </h4>
        </div>
        <div id="weekly-container">
          
          <div id="weekly-pet-img"></div>
        </div>
    </div>
  )
}

export default Dashboard