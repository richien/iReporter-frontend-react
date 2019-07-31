import moxios from 'moxios';
import { login } from '../../../actions/login/loginApi';

describe('loginApi', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the login method with a success response', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        response: {
          data: {
            data: {
              data: [{ access_token: 'sadcsdcasdcasdcasc', user: {}, status: 200 }]
            }
          }
        }
      });
    });
    const user = {
      user: {
        username: 'james',
        password: 'asdsacd234EE'
      }
    };
    return login(user).then(response => {
      expect(response.data.data[0].status).toEqual(200);
    });
  });

  it('should call the login method with a failure response', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 401,
        response: {
          error: 'Request failed with status code 401'
        }
      });
    });
    const user = {
      user: {
        username: 'james',
        password: ''
      }
    };
    return login(user).catch(error => {
      expect(error).toEqual('Request failed with status code 401');
    });
  });
});
