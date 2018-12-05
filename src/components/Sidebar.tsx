import * as React from 'react';
import { matchPath } from 'react-router';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'react-icons-kit';

import { ROUTES } from '../routes';
import { COLORS, Z_INDICES } from '../constants';

export const SIDEBAR_WIDTH = 250;

interface ILinkProps {
  active?: boolean;
  to: string;
  text: string;
  icon: any;
}

const Link = ({ active, to, text, icon }: ILinkProps) => (
  <MenuItem>
    <MenuLink to={to} active={active ? 1 : 0}>
      <SidebarIcon active={active ? 1 : 0}>
        <Icon icon={icon} size={16} />
      </SidebarIcon>
      {text}
    </MenuLink>
  </MenuItem>
);

interface ISidebarProps {
  location: any;
}

const Sidebar = ({ location }: ISidebarProps) => (
  <Container>
    <Menu>
      {ROUTES.map((route, index) => {
        const match = matchPath(location.pathname, route.path);
        const active = !!match && match.isExact;

        return (
          <Link
            key={index}
            active={active}
            to={route.path}
            text={route.name}
            icon={route.icon}
          />
        );
      })}
    </Menu>
  </Container>
);

const Container = styled.div`
  position: fixed;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  background: ${COLORS.white};
  z-index: ${Z_INDICES.sidebar};
  padding: 25px;
  padding-top: 145px;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 15px;
`;

const MenuLink = styled(RouterLink)<{ active: number }>`
  color: ${props => (props.active ? COLORS.blueLight : COLORS.purple)};
  font-weight: 700;
  text-decoration: none;
  font-size: 20px;
`;

const SidebarIcon = styled.div<{ active: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: ${COLORS.white};
  background: ${props => (props.active ? COLORS.blueLight : COLORS.purple)};
  box-shadow: ${props =>
    props.active ? `0 0 16px -2px ${COLORS.blueLight}` : 'none'};
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

export default withRouter(Sidebar);
