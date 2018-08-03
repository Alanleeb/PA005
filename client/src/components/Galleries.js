import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import {
    Container,
    Header
} from 'semantic-ui-react';
import styled from 'styled-components';

class Galleries extends Component {
render() {
  const IMAGES =
  [{
          src: "https://danwgoodman.files.wordpress.com/2013/03/bee-hive-border-small.jpg",
          alt: "Yellowstone",
          thumbnail: "https://danwgoodman.files.wordpress.com/2013/03/bee-hive-border-small.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "YellowStone"
  },
  {
          src: "https://danwgoodman.files.wordpress.com/2013/03/glacier-panorama-small.jpg",
          alt: "Yellowstone",
          thumbnail: "https://danwgoodman.files.wordpress.com/2013/03/glacier-panorama-small.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "YellowStone"
  },
  
  {
          src: "https://danwgoodman.files.wordpress.com/2013/03/looking-to-glacier-small.jpg",
          alt: "Yellowstone",
          thumbnail: "https://danwgoodman.files.wordpress.com/2013/03/looking-to-glacier-small.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212
  },
  {
        src: "https://danwgoodman.files.wordpress.com/2013/03/young-one-small.jpg",
        alt: "Yellowstone",
        thumbnail: "https://danwgoodman.files.wordpress.com/2013/03/young-one-small.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},
{
        src: "https://danwgoodman.files.wordpress.com/2013/03/self-portrait-at-the-vista-small.jpg",
        alt: "Yellowstone",
        thumbnail: "https://danwgoodman.files.wordpress.com/2013/03/self-portrait-at-the-vista-small.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},
{
        src: "https://res.cloudinary.com/alanleeb/image/upload/v1533333347/gaqf4yjdv81xm2wqyv85.jpg",
        alt: "Yellowstone",
        thumbnail: "https://res.cloudinary.com/alanleeb/image/upload/v1533333347/gaqf4yjdv81xm2wqyv85.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},

]
  return(
        <div>
        <MainHeader>
        <Header as="h1" color="inverted" textAlign="center">Gallery</Header> 
        </MainHeader>                    
        <Container>
        <Gallery images={IMAGES} />
        </Container>
        </div>
    );
  }
}

const MainHeader = styled.div`
background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('https://adventuremissoula.com/wp-content/uploads/2014/02/Glacier-National-Park-Coeur-dAlene-rafting.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: black;
`

export default Galleries;