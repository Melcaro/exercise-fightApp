import axios from 'axios';

export async function fetchUsers() {
  const { data } = await axios.get(`/api/v1/users`);
  return data;
}

export async function addUser(user) {
  return axios.post('', user);
}
