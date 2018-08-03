import React, { Component } from 'react';
import { Header, Segment, Input, Label, Divider, Image } from 'semantic-ui-react';


class Packages extends Component {
  state = { amount: 150.5 };

  render() {
    const { amount } = this.state;

    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>React Payments</Header>
        <Label color='green'>Payment Amount</Label>
        <Input value={amount} disabled style={{ fontSize: '18px' }} />
        <Divider />
      </Segment>
    );
  }
}

export default Packages;