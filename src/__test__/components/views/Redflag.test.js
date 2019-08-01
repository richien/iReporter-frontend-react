import React from 'react';

import { shallow } from 'enzyme';
import Redlag, { cards } from '../../../components/views/incidents/Redflag';

function renderRedflag(args) {
  const defaultProps = {
    redFlags: [{}],
    errors: {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Redlag {...props} />);
}

describe('Redlag', () => {
  it('should match snapshot', () => {
    const wrapper = renderRedflag();
    expect(wrapper).toMatchSnapshot();
  });

  it('should return cardItems given an array of redflag objects', () => {
    const redFlags = [
      {
        status: 'resolved',
        title: 'test',
        createdOn: 'Wed, 13 Feb 2019 00:00:00 GMT',
        id: '1'
      }
    ];

    const cardItems = cards(redFlags);
    expect('div').toEqual(cardItems[0].type);
  });
});
