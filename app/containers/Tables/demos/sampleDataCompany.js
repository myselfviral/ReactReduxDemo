import Axios from 'axios';
import Qs from 'querystring';

export const anchorTables = [
{
  name: 'com_id',
  label: 'Id',
  initialValue: '',
  hidden: true
}, {
  name: 'com_name',
  label: 'Name',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'com_logo',
  label: 'Logo',
  initialValue: null,
  width: 'auto',
  hidden: true
}, {
  name: 'com_logopath',
  label: 'Phone',
  initialValue: '0.00',
  width: 50,
  hidden: true
},
{
  name: 'com_street1',
  label: 'Street 1',
  initialValue: null,
  width: 'auto',
  hidden: true
},{
  name: 'com_street2',
  label: 'Street 2',
  initialValue: null,
  width: 'auto',
  hidden: true
}, {
  name: 'com_phone',
  label: 'Phone',
  initialValue: '0.00',
  width: 50,
  hidden: true
},{
  name: 'com_city',
  label: 'City',
  initialValue: '0.00',
  width: 50,
  hidden: true
},{
  name: 'com_state',
  label: 'State',
  initialValue: '0.00',
  width: 50,
  hidden: true
},{
  name: 'com_zipcode',
  label: 'Zipcode',
  initialValue: '0.00',
  width: 50,
  hidden: true
}, {
  name: 'com_country',
  label: 'Country',
  initialValue: '0.00',
  width: 50,
  hidden: true
}, {
  name: 'com_status',
  label: 'Status',
  initialValue: '0.00',
  width: 50,
  hidden: true
}, {
  name: 'createdAt',
  label: 'Created',
  initialValue: '0.00',
  width: 50,
  hidden: true
}, {
  name: 'updatedAt',
  label: 'updated',
  initialValue: '0.00',
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



export const dataApis = [
   {
      "com_id": 1,
      "com_name": "Aladin",
      "com_logo": null,
      "com_logopath": null,
      "com_phone": null,
      "com_street1": null,
      "com_street2": null,
      "com_city": null,
      "com_state": null,
      "com_zipcode": null,
      "com_country": null,
      "com_status": "active",
      "createdAt": "2019-11-27T15:30:49.000Z",
      "updatedAt": "2019-11-27T15:30:49.000Z"
    },
];






