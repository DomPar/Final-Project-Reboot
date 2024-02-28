import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function SquarePicturesWithMargin() {
  return (
    <ImageList sx={{ width: 1000, height: 400}} cols={5} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{margin:20, alignItems:'center'}}>
          <img 
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <div>{`Nombre: ${item.petName}`}</div>
          <div>{`Edad: ${item.petAge}`}</div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      petName:'Chichi',
      petAge:'2'
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      petName:'Chichi',
      petAge:'2'
    },
  ];