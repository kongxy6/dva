import request from '../utils/request';
import reqwest from 'reqwest';

export function queryUsers() {
  return request('/api/users');
}

export async function fetch(payload) {
  let res;
  await reqwest({
    url: '/api',
    method: 'get',
    data: {
      ...payload,
      type: 'json'
    }
  }).then(data => {
    res = data;
  });
  return res;
}

export function create(values) {
  return request('/api/users', {
    methods: 'POST',
    data: JSON.stringify(values)
  });
}

export function patch({ id, values }) {
  return request(`/api/users/${id}`, {
    methods: 'PATCH',
    data: JSON.stringify(values)
  });
}

export function remove({ id }) {
  return request(`/api/users/${id}`, {
    methods: 'DELETE'
  });
}
