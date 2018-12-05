import * as React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { IInputEvent } from '../types';

interface IProps {
  label?: string;
  value: string;
  onChange: (e: IInputEvent) => void;
}

const Input = ({ label, value, onChange }: IProps) => (
  <InputGroup>
    {label && <InputLabel>{label}</InputLabel>}
    <StyledInput value={value} onChange={onChange} />
  </InputGroup>
);

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${COLORS.grayDarkest};
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px 10px 7px;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray};

  &:active,
  &:focus {
    outline: none;
    border-color: rgba(59, 150, 200, 0.6);
    box-shadow: 0 0 10px rgba(59, 150, 200, 0.6);
  }
`;

export default Input;
