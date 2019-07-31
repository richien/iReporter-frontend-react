import React from 'react';
import Authenticated from '../../routes/Authenticated';

describe('Authenticated route', () => {
  it('should render a component if the user is logged in', () => {
    const TestDiv = <div />;
    sessionStorage.setItem('isLoggedIn', true);
    const component = Authenticated(TestDiv)({});
    expect(component.type.type).toEqual('div');
  });

  it('should redirect to signin page if the user is not logged in', () => {
    const TestDiv = 'test';
    sessionStorage.clear();
    Authenticated(TestDiv)({});
  });
});
