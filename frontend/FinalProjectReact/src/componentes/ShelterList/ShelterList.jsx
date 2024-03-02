import ShelterItem from './ShelterItem';
import './ShelterList.css'

const listShelter = () => {
    const result = arrayShelter.map((shelter) => {
        return shelter;
    })
    return result;
}

const arrayShelter = [
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>,
    <ShelterItem/>
  ]


const ShelterList = () => {
  return (
    <div id='shelter-list-container'>
        {listShelter()}
    </div>
  )
}

export default ShelterList