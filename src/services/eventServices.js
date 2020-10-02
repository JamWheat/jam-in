import tokenService from './tokenService'
const BASE_URL = "/api/events/";

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" })
      .then(res => res.json())
}

export function create(event) {
  return fetch(BASE_URL, {
      method: "POST",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(event)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function update(event) {
  return fetch(`${BASE_URL}${event._id}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(event)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function deleteevent(id) {
  return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
  }, { mode: "cors" })
      .then(res => res.json());
}

export function filter(filterData) {
  return fetch(`${BASE_URL}filter`, { mode: "cors" })
      .then(res => res.json(filterData))
}