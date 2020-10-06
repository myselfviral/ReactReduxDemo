import axios from 'axios';
import Qs from 'querystring';
// const API_BASE_ADDRESS = 'http://52.59.136.34:8081';
// const API_BASE_ADDRESS = 'http://192.168.1.131:8081';
const API_BASE_ADDRESS = 'http://192.168.1.118:8081';
const token = localStorage.getItem('access_token');


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + token
  }
};


export default class Api {
  static  getCampaigns() {
    const uri = API_BASE_ADDRESS + '/Campaigns';
    return  fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' +token
      },
    });
  }

  static getCampaigns1 = () => {
    return axios.get(API_BASE_ADDRESS + '/Campaigns', config);
  };

  static addCampaign = payload => {
    const Campaign = {
      cam_code: payload.cam_code,
      cam_name: payload.cam_name
    };
    return axios.post(API_BASE_ADDRESS + '/Campaigns', Qs.stringify(Campaign), config);
  };

  static updateCampaign = payload => {
    const Campaign = {
      cam_code: payload.cam_code,
      cam_name: payload.cam_name
    };
    return axios.put(API_BASE_ADDRESS + '/Campaigns/' + payload.cam_id, Qs.stringify(Campaign), config);
  };

  static deleteCampaign = camId => {
    return axios.delete(API_BASE_ADDRESS + '/Campaigns/' + camId, config);
  };
}
