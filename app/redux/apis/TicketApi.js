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
  static  getTickets() {
    const url = API_URL + '/tickets';
    return  fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      },
    });
  }

 
  static addTicket = payload => {
     let company_data = {
      com_name: payload.com_name,
      com_phone: payload.com_phone,
      com_id: payload.com_id
    };
    return axios.post(API_URL + '/tickets', Qs.stringify(company_data), configs);
  };

  static updateTicket = payload => {
    let company_update_data = {
      com_name: payload.com_name,
      com_phone: payload.com_phone,
      com_id: payload.com_id
    };
    return axios.put(API_URL + '/tickets/' + payload.com_id, Qs.stringify(company_update_data), configs);
  };

  static deleteCompany = bId => {
    return axios.delete(API_URL + '/tickets/' + bId, configs);
  };
}
