import React from 'react'
import ShelterCard from '../../componentes/ShelterCard/ShelterCard'
import SquarePicturesWithMargin from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterProfileFromUser.css'


function ShelterProfileFromUser() {


  return (
    <div id='shelter-container'>
      <div id='shelter-card-info'>
        <ShelterCard/>
      </div>
        <div id='picturesandcard'>
            <SquarePicturesWithMargin/>
        </div>
        <div id='shelter-card'>
            <div id="shelter-image"></div>
            <p id='description-shelter'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
            <a href="https://www.google.es/maps/@28.1271824,-15.4412337,15z?entry=ttu">Encuentranos Aqui</a>
        </div>
    </div>
        
  )
}

export default ShelterProfileFromUser