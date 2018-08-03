import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { setFlash } from '../reducers/flash';
import { connect } from 'react-redux';
import { setHeaders } from '../reducers/headers';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';

class BraintreeDrop extends Component {
  state = { 
    loaded: false, 
    token: '',
  };
  
  handlePaymentMethod = (payload) => {
    //TODO: Make axios call to our server to post a payment
  }

  render () {
    const { loaded, token } = this.state;

    if(loaded)
      return (
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      );
    else
      return(
        <Dimmer active>
          <Loader>Loading Payment Experience. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default connect()(BraintreeDrop);