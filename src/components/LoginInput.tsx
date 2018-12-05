import * as React from 'react';
import styled from 'styled-components';

import Spinner from './Spinner';

import { COLORS } from '../constants';

interface IProps {
  label?: string;
  placeholder?: string;
  secret?: boolean;
  loading?: boolean;
}

const LoginInput = ({ label, placeholder, secret, loading }: IProps) => (
  <InputGroup>
    {label && <InputLabel>{label}</InputLabel>}
    <Input placeholder={placeholder} type={secret ? 'password' : 'text'} />
    <Gradient />
    {loading && (
      <Spinner
        style={{
          width: '32px',
          position: 'absolute',
          right: '10px',
          top: '10px',
        }}
      />
    )}
  </InputGroup>
);

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 35px;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: 700;
  color: ${COLORS.white};
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
  border: none;
  padding: 12px 15px 11px;
  color: ${COLORS.white};
  outline: none;
`;

const Gradient = styled.div`
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    ${COLORS.blueLight},
    ${COLORS.purple} 60%
  );
`;

export default LoginInput;
