import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const register = async (user) => {
  const response = await axios.post(`${baseUrl}/registration`, user);
  return response.data;
};

export default { register };
