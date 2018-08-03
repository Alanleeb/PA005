import React, { Component } from 'react';
import { Header, Image, Segment, Input, Label, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import BaraintreeDrop from './BraintreeDrop';

class Home extends Component {

  render() {

    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>HOME</Header>
      </Segment>
    );
  }
}

const ImageWrapper = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid black;
`

export default Home;
