import React from 'react'
import './PetCard.css'
import { ImageListItem } from '@mui/material'
import ListPicture from '../ListPicture/ListPicture'
import FavoriteIcon from '@mui/icons-material/Favorite';


function PetCard() {
  return (
    <div id='petcard-container' >
        <div id="box-container">
            <img id="pet-picture" src="" alt="myphoto" />
           <div id="fav-icon"> 
           <FavoriteIcon/>
            </div>
            <div id="pet-description">
                <h1>Coco, 5</h1>
                <span>Raza Canina: Mestizo bardino Edad: de 1 a 7 años jddjdjjddjdj ndjdijhawleuif qlctiugh kjg j hgrg gau i g higq  uigq hg g  huq gro ojif og hgr h qgh uq g hugqfdafafsdfadafdafdsasfdfadsfasfdas dfsafdafsdadsffddss ryukt ktnkbtnuik ryukydafdcadasfdafsd adfadaffdasfafa dafadsafdffdfsdfsfdfda afdadsdaafddfdfa afdadfadfassfsdfsdfsd</span>
            </div>
            <div id="hobbiesbox">
                <h2 id= "hobbies">¡Conoce a Coco!</h2>
                <div id= "text"> 
                <span> 🐾 Cuando hace solito me encanta ir a la playa y jugar con las olas</span> <br></br>  <br></br>
                <span> 🐾 Cuando está nublado prefiero ir al campito y revolcarme en los charcos</span>  <br></br>  <br></br>
                <span> 🐾 ¡Pero lo que más me gusta es pasar un día c </span>  <br></br>  <br></br>
                </div>
            </div>
        </div>
        <div id="list-picture">
            <ListPicture/>
        </div>
        
    </div>
  )
}

export default PetCard