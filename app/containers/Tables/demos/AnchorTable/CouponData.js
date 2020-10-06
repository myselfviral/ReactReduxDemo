import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 'c_id',
  label: 'Id',
  initialValue: '',
  hidden: true
},
{
  name: 'cg_id',
  label: 'Coupon Group',
  initialValue: '',
  hidden: true
},
{
  name: 'c_code',
  label: 'Code',
  initialValue: null,
  width: 'auto',
  hidden: false
},
{
  name: 'updatedAt',
  label: 'updated',
  initialValue: null,
  width: 50,
  hidden: true
}, 
{
  name: 'createdAt',
  label: 'Created At',
  initialValue: null,
  width: 50,
  hidden: true
}, 
{
  name: 'edited',
  label: '',
  initialValue: '',
  hidden: true
}, {
  name: 'action',
  label: 'Action',
  initialValue: '',
  hidden: false
},
];



export const dataApi = [
   {
    "c_id": 1,
    "cg_id": null,
    "c_code": null,
    "createdAt":null,
    "updatedAt":null
  },
        
];






