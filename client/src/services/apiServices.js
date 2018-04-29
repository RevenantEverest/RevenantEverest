import axios from 'axios';
import key from './env.js';
const services = {};


//Twitch API
services.getStreamInfo = (data) => {
  return axios.get(`https://api.twitch.tv/kraken/channels/${data.channel_name}?client_id=${key}`)
};

services.streamStatus = (data) => {
  return axios.get(`https://api.twitch.tv/kraken/streams/${data.channel_name}?client_id=${key}`);
};




export default services;
