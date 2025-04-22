import axios from 'axios';
const heart = `65.2.29.15`;
const URL = 'http://localhost:8080/api/lifestyle';
const URL1 = 'http://localhost:5000';

//to send data to backend


export const addLifestyle = (data) => {
  return axios.post(`${URL}/submit`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};


  export const sendflask = (data) => {
    return axios.post
  }

  export const getALLLifestyle = () => {
    return axios.get(`${URL}/view`);

  }

  export const getLifestyleById = () => {
    return axios.get($`{URL}/${id}`);

  }

  export const riskresult = (data)=>{
    return axios.get(`${URL1}/predict`, data)
  };