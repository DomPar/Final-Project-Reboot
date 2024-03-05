import './ShelterList.css'
import { Link } from 'react-router-dom'

const ShelterItem = ({image , name, shelterId}) => {
  
  
  return (
    <Link to={`/app/shelter/${shelterId}`}>
    <div id="shelter">
      <div id="shelter-profile" style={{backgroundImage: `url(${image})`}}>
      </div>
      <div id="shelter-name">
      {name}
      </div>
    </div>
    </Link>
  )
}

export default ShelterItem