import React from 'react'
import ShelterList from '../../componentes/ShelterList/ShelterList'
import './ListOfShelters.css'

function ListOfShelters() {
  return (
    <div id='shelterlist-container'>
    <div id='listofshelters'>{ShelterList()}</div>
    </div>
  )
}

export default ListOfShelters