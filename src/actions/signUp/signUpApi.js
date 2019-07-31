import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const baseURL = `${process.env.API_DOMAIN}/api/v1/auth/signup`;

export function signUp(user) {
  return axios
    .post(baseURL, {
      username: user.username,
      password: user.password1,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    })
    .then(response => handleResponse(response.data.data))
    .catch(error => handleError(error.response.data.error));
}

export default signUp;
