import axios from 'axios';
import Qs from 'querystring';
//const API_BASE_ADDRESS = 'http://192.168.1.118:8081';
import { API_URL } from '../../config/applicationConstatnt';

const token = localStorage.getItem('access_token');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer '+ token,
  }
};


export default class Api {
  static  getBarcodes() {
    const uri = API_URL + '/barcodes';
    return  fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwiaWF0IjoxNTc1Mjc1MDA1LCJleHAiOjE2MDY4MTEwMDV9.q7ezRr4tlYnYGDuyMTUdqTtW0OIdGWn_umcmXBHCzVQ'
        Authorization: 'Bearer ' + token
      }
    });
  }

  static getBarcodebyGroup = payload => {
    return axios.get(API_URL + '/barcodes/'+ payload,  config);
  };
 
  static addBarcode = payload => {
    const Barcode = {
      b_code: payload.b_code,
      bg_id: payload.bg_id
    };
    return axios.post(API_URL + '/barcodes/' + payload.bg_id , Qs.stringify(Barcode), config);
    
  };

  static updateBarcode = payload => {
    const Barcode = {
      b_code: payload.b_code,
      bg_id: payload.bg_id
    };
    return axios.put(API_URL + '/barcodes/' + payload.b_id, Qs.stringify(Barcode), config);
  };

  static deleteBarcode = bId => {
    return axios.delete(API_URL + '/barcodes/' + bId, config);
  };
}
