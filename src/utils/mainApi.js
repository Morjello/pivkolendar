import { url, headers } from './constants';

const getJson = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Error: ${res.status}`);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const register = (userData) => {
  return fetch(`${url}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: userData.username,
      email: userData.email,
      password: userData.password,
    }),
  }).then((res) => getJson(res));
};

export const login = (userData) => {
  return fetch(`${url}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      email: userData.email,
      password: userData.password,
    }),
  })
    .then((res) => getJson(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
};

export const getUserData = (token) => {
  return fetch(`${url}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => getJson(res))
    .then((data) => data);
};

export const updateUserData = (userData) => {
  return fetch(`${url}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      email: userData.email,
      username: userData.username,
    }),
  }).then((res) => getJson(res));
};
