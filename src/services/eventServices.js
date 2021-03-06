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

// export function filter(filterData) {
//   return fetch(`${BASE_URL}filter`, {body: JSON.stringify(filterData)}, { mode: "cors" })
//       .then(res => res.json())
// }

export function filter(filterData) {
    return fetch(`${BASE_URL}filter`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(filterData)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getUserHosting(id) {
    return fetch(`${BASE_URL}userhost/${id}`, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, {mode: "cors"})
    .then(res => res.json())
  }

export function getUserAttending(id) {
return fetch(`${BASE_URL}useratt/${id}`, {
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
}, {mode: "cors"})
.then(res => res.json())
}

export function eventDetails(id) {
    return fetch(`${BASE_URL}event/${id}`)
        .then(res => res.json())
}

export function userAttend(userid, eventid) {
    return fetch(`${BASE_URL}attend/${eventid}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(userid)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function userUnattend(userid, eventid) {
    return fetch(`${BASE_URL}unattend/${eventid}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(userid)
    }, { mode: "cors" })
        .then(res => res.json());
}