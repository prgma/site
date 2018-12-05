import * as React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';
import Footer from '../components/Footer';

import { COLORS } from '../constants';

const Login = () => (
  <Container>
    <Constraint>
      <Logo src={logo} />
      <InfoHeader>Something great is coming...</InfoHeader>
      <InfoText>Enter your email below to receive updates.</InfoText>
      <LoginInput placeholder="Subscribe to our mailing list" />
      <LoginButton>Subscribe</LoginButton>
    </Constraint>
    <Footer />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${COLORS.blueBlack};
`;

const Constraint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 150px auto;
  max-width: 500px;
`;

const Logo = styled.img`
  margin-bottom: 80px;
  width: 200px;
`;

const InfoHeader = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 25px;
  color: ${COLORS.watermarkBlueBlackHighlight};
`;

const InfoText = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${COLORS.watermarkBlueBlack};
`;

export default Login;
