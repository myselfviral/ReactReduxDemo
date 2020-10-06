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
  static  getCouponGroups() {
    const url = API_URL + '/coupon_groups';
    return  fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      },
    });
  }

 
  static addCouponGroup = payload => {
     let coupongroup_data = {
      cg_id: payload.cg_id,
      c_name: payload.c_name,
      c_type: payload.c_type  
    };
    return axios.post(API_URL + '/coupon_groups', Qs.stringify(coupongroup_data), configs);
  };

  static updateCouponGroup = payload => {
    let company_update_data = {
      cg_id: payload.cg_id,
      c_name: payload.c_name,
      c_type: payload.c_type 
    };
    return axios.put(API_URL + '/coupon_groups/' + payload.cg_id, Qs.stringify(company_update_data), configs);
  };

  static deleteCouponGroup = bId => {
    return axios.delete(API_URL + '/coupon_groups/' + bId, configs);
  };
}
