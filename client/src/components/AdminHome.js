import React, { Component } from 'react';
import { Header, Image, Segment, Input, Label, Divider } from 'semantic-ui-react';
import styled from 'styled-components';


class AdminHome extends Component {

    handleClick = (e) => {
        window.location = "/galleries"
    }

  render() {

    return (
        <div>
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>HOME</Header>
        <Image src='https://adventuremissoula.com/wp-content/uploads/2014/02/Glacier-National-Park-Coeur-dAlene-rafting.jpg' width='350px' height='200px' onClick={this.handleClick}/>
      </Segment>
      </div>
    );
  }
}

const ImageWrapper = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid black;
`

export default AdminHome;
