import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpload, fetchPhotos } from '../reducers/photos';
import { Segment, Image, Divider, Header, Grid, Loader, Dimmer } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Photos extends Component {
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

  render() {
    return(
      <Segment basic>
        { this.state.fileUploading ?
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer> :
          <Dropzone
            onDrop={this.onDrop}
            style={{ width: '100%', height: '100px', border: '1px dashed black'}}
          >
            <Header as='h4'>Try dropping some files or clicking here to upload!</Header>
          </Dropzone>
        }
        <Segment basic>
          <Header as='h2'>The Clouds Photos</Header>
          <Divider />
          <Grid>
            <Grid.Row>
              { this.displayPhotos() }
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Photos);