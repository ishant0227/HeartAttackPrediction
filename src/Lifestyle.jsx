import axios from 'axios';

const URL = 'http://65.2.29.15:8080/api/lifestyle';

//to send data to backend
export const addLifestyle = (data) => {
    return axios.post(`${URL}/add`, data);
  };

  export const getALLLifestyle = () => {
    return axios.get(`${URL}/view`);

  }

  export const getLifestyleById = () => {
    return axios.get($`{URL}/${id}`);

  }