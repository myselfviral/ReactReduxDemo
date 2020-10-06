import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 'sub_id',
  label: 'Id',
  initialValue: '',
  hidden: true
}, {
  name: 'sub_email',
  label: 'Email',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'sub_ip',
  label: 'Ip',
  initialValue: null,
  width: 'auto',
  hidden: true
}, {
  name: 'createdAt',
  label: 'Created',
  initialValue: null,
  width: 50,
  hidden: true
}, {
  name: 'updatedAt',
  label: 'updated',
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
  hidden: true
},
];



export const dataApi = [
   {
    "sub_id": 1,
    "sub_email": "ervishu83@yahoo.com",
    "sub_ip": null,
    "createdAt": null,
    "updatedAt": null
    },
        
];






