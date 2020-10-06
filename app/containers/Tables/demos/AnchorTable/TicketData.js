import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 't_id',
  label: 'Id',
  initialValue: '',
  hidden: true
}, {
  name: 't_id',
  label: 'Ticket Number',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'tg_id',
  label: 'Ticket Group id',
  initialValue: null,
  width: 'auto',
  hidden: false
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
    "t_id": 1,
    "tg_id": null,
    "cam_id": null,
    "createdAt": null,
    "updatedAt": null
    },
        
];






