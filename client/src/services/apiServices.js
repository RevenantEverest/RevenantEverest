import axios from 'axios';
import key from './env.js';
const services = {};


//Twitch API
services.getStreamInfo = (data) => {
  return axios.get(`https://api.twitch.tv/kraken/channels/${data}?client_id=${key}`)
};

services.streamStatus = (data) => {
  return axios.get(`https://api.twitch.tv/kraken/streams/${data}?client_id=${key}`);
};




export default services;
