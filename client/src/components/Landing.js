import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import styled from 'styled-components';

class Landing extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>

    );
  }
}

const ImageWrapper = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid black;
`

export default Landing;
