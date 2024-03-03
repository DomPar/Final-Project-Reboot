import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getAllPetsByShelter } from "../../services/petService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SquarePicturesWithMargin() {
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
    <ImageList sx={{ width: 1000, height: 400 }} cols={5} rowHeight={164}>
      {pets.map((pet, index) => (
        <Link to={`/app/petprofile/${pet.id}`}>
          <ImageListItem
            key={pet.index}
            style={{ margin: 20, alignItems: "center" }}
          >
            <div id="pet-fav">Fav</div>
            <img
              srcSet={`${pet.media}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${pet.media}?w=164&h=164&fit=crop&auto=format`}
              alt={pet.name}
              loading="lazy"
            />

            <div>{`Nombre: ${pet.name}`}</div>
            <div>{`Edad: ${pet.age}`}</div>
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default SquarePicturesWithMargin;
