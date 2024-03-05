import './NewPet.css'
import {createPetWithShelter} from '../../services/petService.js'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UploadWidget from '../UploadWidget/UploadWidget.jsx'


function NewPet() {
    const navigate = useNavigate()
    const[name, setName] = useState('')
    const[media, setMedia] = useState('')
    const[age, setAge]= useState('')
    const[description, setDescription]= useState('')
    const[preferences, setPreferences]= useState('')
    const[species, setSpecies]= useState('')

    
    const createPet = async () => {
    const sendPet = await createPetWithShelter({media: media, description: description, name:name, age:age, preferences:preferences, species: species})
    navigate(`/app/shelterownprofile/${localStorage.getItem("id")}`)
}
  return (
    <div id='create-pet-container'>
      <div id="add-picture-container">
        <div id="add-picture-button">
          <UploadWidget id='add-picture-button' setter={setMedia}/>
        </div>
      </div>
      <div id="media-container">
        <img id='media' src={media} alt="Pet's Picture"/>
      </div>
      <div id="create-pet-fields">
        <textarea name="Pet's Name" id="petname" cols="2" rows="1" placeholder='Add Name...' onChange={(e) => setName(e.target.value)}></textarea>
        <textarea name="Pet's Species" id="petspecies" cols="2" rows="1" placeholder='Add Species...' onChange={(e) => setSpecies(e.target.value)}></textarea>
        <input type='number' min={0} name="Age" id="petage" cols="2" rows="1" placeholder='Add Age...' onChange={(e) => setAge(e.target.value)}></input>
        <textarea name="Pet's Description" id="petdescription" cols="30" rows="10" placeholder='Add Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
        <textarea name="Preferences" id="petpreferences" cols="30" rows="10" placeholder='Add Preferences...' onChange={(e) => setPreferences(e.target.value)}></textarea>
      </div>
      <div id="share-container">
        <div id="share-button">
          <button id='share' onClick= {createPet}>Share</button>
        </div>
      </div>

    </div>
  )
}

export default NewPet