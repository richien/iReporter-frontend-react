import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const baseURL = `${process.env.API_DOMAIN}/api/v1/auth/login`;

export function login(user) {
  return axios
    .post(baseURL, {
      username: user.username,
      password: user.password
    })
    .then(response => handleResponse(response.data.data))
    .catch(error => handleError(error.response.data.error));
}

export default login;
