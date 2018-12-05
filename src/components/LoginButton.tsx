import styled from 'styled-components';

import { COLORS } from '../constants';

const LoginButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 15px 11px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  border-radius: 4px;
  background: ${COLORS.blueLight};
  color: ${COLORS.blueBlack};
  box-shadow: 0 0 40px 7px rgba(0, 0, 0, 0.05);
  transition: all 300ms ease-out;
  width: 200px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 48px rgba(59, 150, 200, 0.2);
  }
`;

export default LoginButton;
