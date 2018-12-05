import * as React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';

interface IProps {
  text: string;
}

const Button = ({ text }: IProps) => <StyledButton>{text}</StyledButton>;

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 12px 15px 11px;
  background: ${COLORS.purple};
  color: ${COLORS.offWhite};
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  transition: all 300ms ease-out;
  outline: none;
  cursor: pointer;

  &:active {
    background: ${COLORS.purpleDark};
  }
`;

export default Button;
