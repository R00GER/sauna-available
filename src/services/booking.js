import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/book`);
  return response.data;
};

const create = async (event) => {
  const response = await axios.post(`${baseUrl}/book`, event);
  return response.data;
};

const edit = async (event) => {
  const response = await axios.put(`${baseUrl}/book`, event);
  return response.data;
};

export default { getAll, create, edit };
