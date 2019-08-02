import React from 'react';
import UnAuthenticated from '../../routes/UnAuthenticated';

describe('Authenticated route', () => {
  it('should render a component if the user is not  logged in', () => {
    const TestDiv = <div />;
    sessionStorage.clear();
    const component = UnAuthenticated(TestDiv)({});
    expect(component.type.type).toEqual('div');
  });

  it('should redirect to the incidents page if the user is logged in', () => {
    const TestDiv = 'test';
    sessionStorage.setItem('isLoggedIn', true);
    UnAuthenticated(TestDiv)({});
  });
});
