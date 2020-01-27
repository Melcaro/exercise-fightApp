import axios from 'axios';

const users = [
  { name: 'fighterA', score: 0 },
  { name: 'fighterB', score: 0 },
  { name: 'fighterC', score: 0 },
  { name: 'fighterD', score: 0 },
];

export function fetchUsers() {
  //const {data} = await axios.get()
  return users;
}

export async function addUser(user) {
  return axios.post('', user);
}
