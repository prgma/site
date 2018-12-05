import * as React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';

interface IProps {
  heading?: string;
  color?: string;
  children?: React.ReactNode;
}

const Card = ({ heading, color, children }: IProps) => (
  <Container>
    {heading && <CardHeading color={color}>{heading}</CardHeading>}
    <CardBody>{children}</CardBody>
  </Container>
);

const Container = styled.div`
  background: ${COLORS.white};
  border-radius: 6px;
  border: 1px solid ${COLORS.offWhite};
  box-shadow: 0 0 40px 7px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 15px;
`;

const CardHeading = styled.h3<{ color?: string }>`
  background: ${props => props.color || COLORS.blueLight};
  color: ${COLORS.white};
  margin: 0;
  width: 100%;
  padding: 10px 15px 8px;
`;

const CardBody = styled.div`
  padding: 25px;
`;

export default Card;
