import React from 'react'
import ShelterCard from '../../componentes/ShelterCard/ShelterCard'
import SquarePicturesWithMargin from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterProfileFromUser.css'


function ShelterProfileFromUser() {


  return (
    <div id='shelter-container'>
      <div id='shelter-card-info'>
        <div id="shelter-image"></div>
        <div id="shelter-info">
          <p>Nombre Shelter</p>
          <p>Email</p>
          <p>Telefono</p>
        </div>
      </div>
        <div id='picturesandcard'>
            <SquarePicturesWithMargin/>
        </div>
        <div id='shelter-card'>
            <p id='description-shelter'>Description </p>
            <a href="https://www.google.es/maps/@28.1271824,-15.4412337,15z?entry=ttu">Encuentranos Aqui</a>
        </div>
    </div>
        
  )
}

export default ShelterProfileFromUser