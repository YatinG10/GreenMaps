import "./navbar.css"
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './elements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../img/splitit-logo.png')} className = "navbar-logo" alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/process' activeStyle>
            Process
          </NavLink> */}
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;