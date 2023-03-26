import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import SALVIK from '../SALVIK.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={SALVIK} alt="Salvik" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
