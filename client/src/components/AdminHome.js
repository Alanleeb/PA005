import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpload, fetchPhotos } from '../reducers/photos';
import { Segment, Image, Divider, Header, Grid, Loader, Dimmer, Icon, Label, Input } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';


class AdminHome extends Component {
    state = { fileUploading: false };

  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }

  onDrop = (photos) => {
    // dispatch the handleUpload action pass it the photo
    this.toggleUploading();
    this.props.dispatch(handleUpload(photos[0], this.toggleUploading));
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  displayPhotos = () => {
    // map through the state of photo and display them
    return this.props.photos.map( photo => {
      return(
        <Grid.Column width={4} key={photo.id}>
          <Image src={photo.url} fluid />
        </Grid.Column>
      );
    });
  }

    handleClick = (e) => {
        window.location = "/galleries"
    }

  render() {

    return (
        <div>
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>HOME</Header>
        <ImageWrapper>
        <Image src='https://adventuremissoula.com/wp-content/uploads/2014/02/Glacier-National-Park-Coeur-dAlene-rafting.jpg' width='350px' height='200px' onClick={this.handleClick}/>
        </ImageWrapper>
        { this.state.fileUploading ?
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer> :
          <Dropzone
            onDrop={this.onDrop}
            style={{border: 'none'}}
            textalign='center'
          >
          <IconWrapper>
          <Icon  name='plus' />
            Add a Gallery
          </IconWrapper>    
          </Dropzone>
        }
        <Segment basic>
          <Divider />
          <Grid>
            <Grid.Row>
              { this.displayPhotos() }
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
      </div>
    );
  }
}

const IconWrapper = styled.div`
display: flex;
justify-content: center;
width: 150px;
padding: 10px;
margin: 25px;
border: 1px solid black;
cursor: pointer;
background-color: rgba(7,232,201,.3);
`


const ImageWrapper = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;

`
const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(AdminHome);


