import React from "react";
import SquarePicturesWithMarginShelter from "../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin";
import CardLayers3d from "../../componentes/CardLayers/CardLayers";
import "./ShelterOwnProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPetsByShelter } from "../../services/petService";
import { getOwnShelter } from "../../services/shelterService";
import { updateShelterDescription } from "../../services/shelterService";

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
        <div key={index} style={{ margin: 20, alignItems: "center" }}>
          <img
            style={{ maxHeight: "100px", maxWidth: "100px" }}
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

function ShelterOwnProfile() {
  
  const [showTextBox, setShowTextBox] = useState(false);
  const [description, setDescription] = useState("");
  const { shelterId } = useParams();
  const [shelterDatas, setShelterDatas] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      const { result } = await getOwnShelter(shelterId);
      console.log(result)
      setShelterDatas(result);
    };
    getDatas();
  }, []);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = () => {
    setShowTextBox(!showTextBox);
  };

  const sendDescription = async (e) => {
    const { result } = await updateShelterDescription({ description });
    return result;
  };
  return (
    <div id="shelter-profile-container">
      <div id="shelter-profile-button-add-pet">
        <Link to="/app/createpet">
          <button onClick={()=>navigate('app/createpet')}>Add Pet</button>
        </Link>
      </div>
      <div id="shelter-profile-pets">
        {SquarePicturesInShelter()}
        <div></div>
      </div>

      <div id="shelter-profile-info">
        <div id="shelter-profile-avatar">
          <img src={shelterDatas.avatar} alt="" id="shelter-profile-avatar-photo" />
        </div>
        <div id="shelter-profile-data">
          <h1 id="shelter-name">{shelterDatas.shelterName}</h1>
          <h2 id="shelter-description">
            Descripcion: {shelterDatas.description}
          </h2>
          <div>
            <button id="edit-profile-shelter" onClick={handleButtonClick}>
              Edit Profile
            </button>
            <div>
              {showTextBox && (
                <form onSubmit={sendDescription}>
                  <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Ingrese Description..."
                    cols="30"
                    rows="10"
                  />
                  <button type="submit" id="submit-description-shelter">
                    Confirm Changes
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelterOwnProfile;
