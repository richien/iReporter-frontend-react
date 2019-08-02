/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const baseURL = `${process.env.API_DOMAIN}/api/v1/red-flags`;

export async function getRedFlags() {
  try {
    const token = sessionStorage.getItem('access_token');
    const response = await axios.get(baseURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return handleResponse(response.data.data);
  } catch (error) {
    return handleError(error.response.data);
  }
}
