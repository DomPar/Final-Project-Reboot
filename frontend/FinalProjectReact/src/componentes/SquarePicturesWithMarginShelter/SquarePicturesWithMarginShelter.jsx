import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getAllPetsByShelter } from "../../services/petService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// function SquarePicturesWithMarginShelter() {
//   const { shelterId } = useParams();
//   const [pets, setPets] = useState([]);
//   useEffect(() => {
//     const getPets = async () => {
//       const { result } = await getAllPetsByShelter(shelterId);
//       setPets(result);
//     };
//     getPets();
//   }, []);

//   return (
// <>
//       {pets.map((pet, index) => (
//           <div key={index}
//           style={{ margin: 20, alignItems: "center" }}>
//             <img
//               srcSet={`${pet.media}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//               src={`${pet.media}?w=164&h=164&fit=crop&auto=format`}
//               alt={pet.name}
//               loading="lazy"
//             />

//             <div>{`Nombre: ${pet.name}`}</div>
//             <div>{`Edad: ${pet.age}`}</div>
//             </div>
//       ))}
//   </>
//   );
// }

export default SquarePicturesWithMarginShelter;
