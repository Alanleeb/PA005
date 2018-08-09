import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Image, Divider, Header, Grid, Loader, Dimmer, Icon, Label, Input } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const imageMaxSize = 1000000000 //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
class AdminHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgSrc: null,
      fileUploading: false
    }
  }


  // componentDidMount() {
  //   this.props.dispatch(fetchPhotos());
  // }

  verifyFile = (files) => {
    if (files && files.length > 0){
      const currentFile = files[0]
      const currentFileType = currentFile.type
      const currentFileSize = currentFile.size
      if (currentFileSize > imageMaxSize) {
        alert("this file is not allowed." + currentFileSize + " bytes is too large")
        return false
      }
      if (!acceptedFileTypesArray.includes(currentFileType)){
        alert("This file is not allowed. Only Images are allowed")
        return false
      }
      return true
    }
  }

handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0){
      this.verifyFile(rejectedFiles)
    }

    if(files && files.length > 0){
      const isVerified= this.verifyFile(files)
      if(isVerified){
        const currentFile = files[0]
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            console.log(reader.result)
            this.setState({
              imgSrc: reader.result
            })
        }, false) 

        reader.readAsDataURL(currentFile)
      }
    }
   
}

  
  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  // displayPhotos = () => {
  //   // map through the state of photo and display them
  //   return this.props.photos.map( photo => {
  //     return(
  //       <Grid.Column width={4} key={photo.id}>
  //         <Image src={photo.url} fluid />
  //       </Grid.Column>
  //     );
  //   });
  // }

    handleClick = (e) => {
        window.location = "/galleries"
    }

  render() {
    const {imgSrc} = this.state
    return (
        <div>
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>HOME</Header>
        { this.state.fileUploading ?
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer> :
          <Dropzone
            onDrop={this.handleOnDrop}
            style={{border: 'none'}}
            textalign='center'
            accept={acceptedFileTypes}
          >
          {/* <Image src={photo.preview} />  */}
          <IconWrapper>
          <Icon  name='plus' />
            Add a Gallery
          </IconWrapper>    
          </Dropzone>
        }
        <ImageWrapper>
        <Image src='https://adventuremissoula.com/wp-content/uploads/2014/02/Glacier-National-Park-Coeur-dAlene-rafting.jpg' width='350px' height='200px' onClick={this.handleClick}/>
        </ImageWrapper>
        <Segment basic>
          <Divider />
          <Grid>
          {imgSrc !== null ? <img src={imgSrc} alt='preview of photo' width='350px' height='200px'/> : ''}
            {/* <Grid.Row>
              { this.displayPhotos() }
            </Grid.Row> */}
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
width: 350px;
`
const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(AdminHome);


