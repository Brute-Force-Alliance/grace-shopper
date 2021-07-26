import axios from 'axios';

const instance = axios.create({
  //API (cloud function) URL goes here
  baseURL: 'http://127.0.0.1:5001/grace-shopper-6d1e0/us-central1/api' 
})

export default instance;