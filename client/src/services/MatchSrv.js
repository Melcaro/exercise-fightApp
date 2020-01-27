import axios from 'axios';

export async function fetchUsers() {
  const { data } = await axios.get(`/api/v1/users`);
  return data;
}

export async function attributeScores(winnerID, looserID) {
  return axios.put(`/api/v1/users`, { winnerID, looserID });
}
