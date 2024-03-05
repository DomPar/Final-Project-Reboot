import React from 'react'
import SquarePicturesWithMarginShelter from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterOwnProfile.css'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPetsByShelter } from '../../services/petService'
import { getOwnShelter } from '../../services/shelterService'

function SquarePicturesInShelter() {
  const { shelterId } = useParams();
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getPets = async () => {
      const { result } = await getAllPetsByShelter(shelterId);
      setPets(result);
    };
    getPets();
  }, []);

  return (
<>
      {pets.map((pet, index) => (
          <div key={index}
          style={{ margin: 20, alignItems: "center" }}>
            <img
              style={{maxHeight: '100px', maxWidth: '100px'}}
              src={pet.media}
              alt={pet.name}
            />

            <div>{`Nombre: ${pet.name}`}</div>
            <div>{`Edad: ${pet.age}`}</div>
            </div>
      ))}
  </>
  );
}


function getMydatas() {
  const { shelterId } = useParams();
  const [shelterDatas, setShelterDatas] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      const { result } = await getOwnShelter(shelterId);
      setShelterDatas(result);
      console.log(result)
    };
    getDatas();
  }, []);

  return shelterDatas.shelterName // Añadir un .map
}



function ShelterOwnProfile() {


  return (
    <div id='shelter-profile-container'>
        

          <div >
            <Link to="/app/createpet">
            <button id="shelter-profile-button-add-pet">Add Pet</button>
            </Link>
          </div>
          <div id='shelter-profile-pets'>
            {SquarePicturesInShelter()}
            <div>{getMydatas()}</div>
          </div>
          <div id='shelter-profile-info'>
            <div id="shelter-profile-avatar"></div>
          </div>
          <button id='edit-profile-shelter'>Edit Profile</button>
    </div>
        
  )
}

export default ShelterOwnProfile