import * as React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

import Icon from 'react-icons-kit';
import { activity } from 'react-icons-kit/feather/activity';

import { COLORS, Z_INDICES } from '../constants';

export const NAVBAR_HEIGHT = 56;

const Navbar = () => (
  <Container>
    <NavbarLogo src={logo} />
    <NavbarItem>
      <Icon icon={activity} size={24} style={{ marginRight: '10px' }} />
      Admin Dashboard
    </NavbarItem>
  </Container>
);

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${COLORS.purple};
  padding: 0 15px;
  height: ${NAVBAR_HEIGHT}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: ${Z_INDICES.navbar};
`;

const NavbarLogo = styled.img`
  width: 100px;
  background: ${COLORS.white};
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(40px);
`;

const NavbarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: 700;
`;

export default Navbar;
