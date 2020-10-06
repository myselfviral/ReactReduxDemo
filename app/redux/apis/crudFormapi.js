import axios from 'axios';
import Qs from 'querystring';

import { API_URL } from '../../config/applicationConstatnt';

const token = localStorage.getItem('access_token');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer '+token,
  }
};

export default class Api {
  static getUsers(action) {
    const uri = API_URL + "/users";
    return fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      },
    });
  }
  
  static getUsersPage = payload => {
    const page = payload.page === undefined ? 0 : payload.page; 
    return axios.get(API_URL + '/users/' + page , config);
  };

  static addUser = payload => {
    const User = {
      firstname: payload.u_name,
      lastname: payload.u_surname,
      email: payload.u_mail,
      password: '23112',
    };

    return axios.post(API_URL + '/users', Qs.stringify(User), config);
  };

  static updateUser = payload => {
    const User = {
      firstname: payload.u_name,
      lastname: payload.u_surname,
      email: payload.u_mail,
    };
    return axios.put(API_URL + '/users/' + payload.u_id, Qs.stringify(User), config);
  };
  
    
    
}


