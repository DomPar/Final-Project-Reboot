import React, { useState } from 'react'
import './PetCard.css'
import { ImageListItem } from '@mui/material'
import ListPicture from '../ListPicture/ListPicture'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {addUserToFavorites} from '../../services/userService.js'
import { useParams } from 'react-router';
import { getOnePet } from '../../services/petService.js';
import { useEffect } from 'react';

function PetCard() {
const[petDatas, setPetDatas] = useState([])

const petId = useParams()
    const handleClick = () => {
           addUserToFavorites(petId.petId) 
           console.log(petId.petId)
      }

      useEffect(() => {
        const getData = async () => {
          const {result} = await getOnePet(petId.petId)
          setPetDatas(result)
          }
          getData()
      }, [])

  return (
    <div id='petcard-container' >
        <img id="pet-picture" src={petDatas.media} alt="Pet Photo" />
           
            <div id="pet-description">
                <h1>{petDatas.name}: {petDatas.age} años</h1>
                <button id="petcard-add-fav" onClick={handleClick} >
                    <div id="fav-icon"> 
                        <FavoriteIcon fontSize='large' sx={{color:'red'}}/>
                    </div>
                </button>
                <span>Raza Canina: {petDatas.species} <div>{petDatas.description}</div></span>
            </div>
            <div id="hobbiesbox">
                <h2 id= "hobbies">¡Conoce a {petDatas.name}!</h2>
                <div id= "text"> 
                <span> 🐾 {petDatas.preferences}</span> <br></br>  <br></br>
                
                </div>
            </div>

        
    </div>
  )
}

export default PetCard