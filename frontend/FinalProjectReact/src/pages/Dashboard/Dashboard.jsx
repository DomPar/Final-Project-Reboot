import StandardImageList from '../../componentes/SquarePosts/SquarePosts'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div id="dashboard-container">
        <div id="main-feed">
          <StandardImageList/>
        </div>
        <div id="weekly-title">
        <h4>Cutest pet of the week </h4>
        </div>
        <div id="weekly-container">
          
          <div id="weekly-pet-img"></div>
        </div>
    </div>
  )
}

export default Dashboard