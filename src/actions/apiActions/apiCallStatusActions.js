import { apiCallStatus } from '../types';

export function apiCallStart() {
  return { type: apiCallStatus.API_CALL_START };
}

export function apiCallError() {
  return { type: apiCallStatus.API_CALL_ERROR };
}
