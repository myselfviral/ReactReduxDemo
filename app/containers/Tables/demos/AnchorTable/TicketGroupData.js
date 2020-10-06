import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 'tg_id',
  label: 'Id',
  initialValue: '',
  hidden: true
}, {
  name: 'tg_game_type',
  label: 'Ticket Group Type',
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
    "tg_id": 1,
    "tg_game_type": null,
    "createdAt": null,
    "updatedAt": null
    },
        
];






