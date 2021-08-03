import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_BASE_URL : process.env.REACT_APP_DEV_BASE_URL;
export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json'
  }
});
