import axios from 'axios';

const URL = '/api/v1';

export function fetchUsers() {
  //const {data} = await axios.get()
  return users;
}

export async function addUser(user) {
  return axios.post('', user);
}
