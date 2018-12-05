import * as React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { COLORS } from '../constants';

const Footer = () => (
  <Container>&copy; {format(new Date(), 'YYYY')} Pragma Mark, LLC</Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${COLORS.watermarkBlueBlack};
`;

export default Footer;
