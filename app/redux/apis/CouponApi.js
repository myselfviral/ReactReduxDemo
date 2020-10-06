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
  static  getCoupon() {
    const url = API_URL + '/coupons';
    return  fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      },
    });
  }

 
  static addCoupon = payload => {
     let coupon_data = {
      cg_id: payload.cg_id,
      c_name: payload.c_name,
      c_type: payload.c_type  
    };
    return axios.post(API_URL + '/coupons', Qs.stringify(coupon_data), configs);
  };

  static updateCoupon = payload => {
    let coupon_update_data = {
      cg_id: payload.cg_id,
      c_name: payload.c_name,
      c_type: payload.c_type 
    };
    return axios.put(API_URL + '/coupons/' + payload.cg_id, Qs.stringify(coupon_update_data), configs);
  };

  static deleteCouponGroup = bId => {
    return axios.delete(API_URL + '/coupons/' + bId, configs);
  };
}
