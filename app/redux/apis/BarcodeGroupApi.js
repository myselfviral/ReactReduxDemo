import axios from 'axios';
import Qs from 'querystring';
// const API_BASE_ADDRESS = 'http://52.59.136.34:8081';
// const API_BASE_ADDRESS = 'http://192.168.1.131:8081';


import { API_URL } from '../../config/applicationConstatnt';
const token = localStorage.getItem('access_token');


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer '+ token
  }
};


export default class Api {
  static  getBarcodeGroups() {
    const uri = API_URL + '/barcode_groups';
    return  fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer '+token
      },
    });
  }

  static getBarcodeGroupsPage = (payload) => {
    const page = payload.page === undefined ? 0 : payload.page; 
    return axios.get(API_URL + '/barcode_groups/' + page, config);
  };

  static addBarcodeGroup = payload => {
    const BarcodeGroup = {
      bg_code: payload.bg_code
    };
    return axios.post(API_URL + '/barcode_groups', Qs.stringify(BarcodeGroup), config);
  };

  static updateBarcodeGroup = payload => {
    const BarcodeGroup = {
      bg_code: payload.bg_code
    };
    return axios.put(API_URL + '/barcode_groups/' + payload.bg_id, Qs.stringify(BarcodeGroup), config);
  };

  static deleteBarcodeGroup = barcodeGroupId => {
    return axios.delete(API_URL + '/barcode_groups/' + barcodeGroupId, config);
  };
}
