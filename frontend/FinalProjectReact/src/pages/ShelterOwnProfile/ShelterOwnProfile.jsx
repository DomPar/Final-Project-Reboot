import React from 'react'
import SquarePicturesWithMarginShelter from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterOwnProfile.css'
import { Link } from 'react-router-dom'


function ShelterOwnProfile() {


  return (
    <div id='shelter-container'>
        <div id='picturesandcard'>
          <Link to="/app/createpet">
          <button>Add Pet</button>
          </Link>
            <SquarePicturesWithMarginShelter/>
            <div id='shelter-card'>
            <CardLayers3d/>
        <p id='description-shelter'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
            </div>
      </div>
    </div>
        
  )
}

export default ShelterOwnProfile