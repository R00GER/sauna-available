import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export default { login };
