import axios from 'axios';
import Qs from 'querystring';
//const API_BASE_ADDRESS = 'http://192.168.1.118:8081';
import { API_URL } from '../../config/applicationConstatnt';

const token = localStorage.getItem('access_token');

const configs = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer '+ token,
  }
};


export default class Api {
  static  getCompanies() {
    const url = API_URL + '/companies';
    return  fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      },
    });
  }

 
  static addCompany = payload => {
     let company_data = {
      com_name: payload.com_name,
      com_phone: payload.com_phone,
      com_id: payload.com_id,
      com_status:payload.com_status
      
    };
    return axios.post(API_URL + '/companies', Qs.stringify(company_data), configs);
  };

  static updateCompany = payload => {
    let company_update_data = {
      com_name: payload.com_name,
      com_phone: payload.com_phone,
      com_id: payload.com_id,
      com_status:payload.com_status
    };
    return axios.put(API_URL + '/companies/' + payload.com_id, Qs.stringify(company_update_data), configs);
  };

  static deleteCompany = bId => {
    return axios.delete(API_URL + '/companies/' + bId, configs);
  };
}
