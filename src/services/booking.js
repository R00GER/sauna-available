import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const create = async (event) => {
  console.log('in crete', event);
  const response = await axios.post(`${baseUrl}/book`, event);
  console.log('in create response', response.data);
  return response.data;
};

const edit = async (event) => {
  const response = await axios.put(`${baseUrl}/book`, event);
  return response.data;
};

export default { create, edit };
