import PostListDash from '../../componentes/PostListDash/PostListDash'
import ShelterList from '../../componentes/ShelterList/ShelterList'
import StandardImageList from '../../componentes/SquarePosts/SquarePosts'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div id="dashboard-container">
        <div id="main-feed">
          <PostListDash/>
        </div>
    
          <div id="weekly-title">
            <h4 className='no-margin'>Cutests pet ofs the week </h4>
          </div>
        <div id="weekly-container">
          <div id="weekly-pet-img1"></div>
          <div id="weekly-pet-img2"></div>
          <div id="weekly-pet-img3"></div>
        </div>

        {/* <div id="shelter-list">
          <ShelterList/>
        </div> */}
    </div>
  )
}

export default Dashboard