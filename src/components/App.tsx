import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';

import NotFound from '../pages/NotFound';

import { ROUTES } from '../routes';
import { COLORS } from '../constants';

const App = () => {
  return (
    <Container>
      <PageWrapper>
        <Switch>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </PageWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: ${COLORS.blueBlack};
  height: 100vh;
`;

const PageWrapper = styled.div`
  padding: 25px;
`;

export default App;
