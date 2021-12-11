import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/applications/';

export function getApplications() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveApplication(application) {
  return fetch(baseUrl + (application.applicationId || ''), {
    method: application.applicationId ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(application),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteApplication(applicationId) {
  return fetch(baseUrl + applicationId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
