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
            <img src="../../Public/Images/MostPopularPets.png" alt="" style={{width: '100%'}}/>
        </div>
        <div id="weekly-container">
          <div id="weekly-pet-img1" className='no-margin'></div>
          <h2 id='most-popular1-name'>Coquette Deluxe</h2>
          <div id="weekly-pet-img2" className='no-margin'></div>
          <h2 id='most-popular2-name'>Mister Michifus</h2>
          <div id="weekly-pet-img3" className='no-margin'></div>
          <h2 id='most-popular3-name'>Abelardo Camaarón</h2>
        </div>

        {/* <div id="shelter-list">
          <ShelterList/>
        </div> */}
    </div>
  )
}

export default Dashboard