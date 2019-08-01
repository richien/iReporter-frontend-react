import moxios from 'moxios';
import { getRedFlags } from '../../../actions/incidents/incidentsApi';

describe('loginApi', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the getRedFlags method with a success response', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        response: {
          data: {
            data: {
              data: [{}, {}],
              status: 200
            }
          }
        }
      });
    });

    return getRedFlags().then(response => {
      expect(response.data.status).toEqual(200);
    });
  });

  it('should call the getRedFlags method with a failure response', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 404,
        response: {
          error: 'No records found'
        }
      });
    });
    return getRedFlags().catch(error => {
      expect(error.error).toEqual('No records found');
    });
  });
});
