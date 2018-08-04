import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
        <Link to='/packages'>
          <Menu.Item name='Packages' />
        </Link>
        <Link to='/photos'>
            <Menu.Item name='Photos' />
        </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
       <Link to='/packages'>
          <Menu.Item name='Packages' />
        </Link>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
        <StyledLink to="/" > LOGO </StyledLink>
        <Link to='/adminhome'>
          <Menu.Item name='Dashboard' />
        </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 25px;
  font-weight: bold;
  font-family: Courier, monospace;
`

export default withRouter(connect(mapStateToProps)(NavBar));
