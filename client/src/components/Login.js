import React, { Component } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../reducers/user';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin({ email, password }, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textalign='center'>Login</Header>
        <StyledLink as="h2" to="/" >LOGO </StyledLink>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field textalign='center' width='500px'>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <StyledLink as="h2" to="/register" > Register </StyledLink>
          <Segment textalign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
        
      </Segment>
    );
  }
}

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  font-size: 25px;
  justify-content: center;
  font-weight: bold;
  font-family: Courier, monospace;
`

export default connect()(Login);
