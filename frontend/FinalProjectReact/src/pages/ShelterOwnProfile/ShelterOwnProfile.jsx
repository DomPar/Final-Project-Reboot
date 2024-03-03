import React from 'react'
import SquarePicturesWithMarginShelter from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterOwnProfile.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPetsByShelter } from '../../services/petService'
import { getOwnShelter } from '../../services/shelterService'

function SquarePicturesInShelter() {
  const { shelterId } = useParams();
  const [pets, setPets] = useState([]);
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

  return shelterDatas.shelterName
}



function ShelterOwnProfile() {


  return (
    <div id='shelter-container'>
        <div id='picturesandcard'>
          <Link to="/app/createpet">
          <button>Add Pet</button>
          </Link>
          <div>
          {SquarePicturesInShelter()}
          <div>{getMydatas()}</div>
          </div>
            <div id='shelter-card'>
            <CardLayers3d/>
        <p id='description-shelter'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
            </div>
      </div>
    </div>
        
  )
}

export default ShelterOwnProfile