import React from 'react';
import { shallow } from 'enzyme';
import {
  Incident,
  mapStateToProps
} from '../../../../components/containers/incidentsPage/IncidentPage';

describe('Incident', () => {
  const defaultProps = {
    loading: false,
    history: {},
    actions: {
      getAllRedFlags: () =>
        new Promise((resolve, reject) => {
          resolve('Data retrieved');
          reject(
            new Error({
              status: 404
            })
          );
        })
    }
  };

  const wrapper = shallow(<Incident {...defaultProps} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map the state in the store to local props', () => {
    const state = {
      loading: false
    };
    expect(mapStateToProps(state)).toEqual({
      loading: false
    });
  });
});
