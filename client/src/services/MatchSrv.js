import axios from 'axios';

export async function fetchUsers(limit) {
  const { data } = await axios.get(`/api/v1/users`, { limit });
  return data;
}

export async function attributeScores(winnerID, looserID) {
  return await axios.put(`/api/v1/users`, { winnerID, looserID });
}

export async function fetchRanking() {
  const { data } = await axios.get('/api/v1/users');
  return data;
}
