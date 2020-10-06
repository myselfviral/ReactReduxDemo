import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 'u_id',
  label: 'Id',
  initialValue: '',
  hidden: true
}, {
  name: 'u_mail',
  label: 'Mail',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'u_p',
  label: 'u_p',
  initialValue: null,
  width: 'auto',
  hidden: true
}, {
  name: 'u_wallet',
  label: 'Wallet',
  initialValue: '0.00',
  width: 50,
  hidden: true
}, {
  name: 'u_name',
  label: 'Name',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'u_surname',
  label: 'Surname',
  initialValue: null,
  width: 'auto',
  hidden: false
}, {
  name: 'u_status',
  label: 'Status',
  initialValue: true,
  width: 'auto',
  hidden: false
}, {
  name: 'u_dob',
  label: 'Dob',
  initialValue: null,
  width: 'auto',
  hidden: true
},{
  name: 'u_photo',
  label: 'Photo',
  initialValue: null,
  width: 'auto',
  hidden: true
},{
  name: 'u_photo_path',
  label: 'u_photo_path',
  initialValue: null,
  width: 'auto',
  hidden: true
},{
  name: 'u_provider',
  label: 'Provider',
  initialValue: 'option1',
  width: 'auto',
  hidden: false
},{
  name: 'u_provider_id',
  label: 'u_provider_id',
  initialValue: 'option1',
  width: 'auto',
  hidden: true
},{
  name: 'u_provider_token',
  label: 'u_provider_token',
  initialValue: 'option1',
  width: 'auto',
  hidden: true
},{
  name: 'createdAt',
  label: 'Created At',
  initialValue: 'option1',
  width: 'auto',
  hidden: true
},{
  name: 'updatedAt',
  label: 'Updated At',
  initialValue: 'option1',
  width: 'auto',
  hidden: true
},{
  name: 'u_pwd_changed_at',
  label: 'password changed at',
  initialValue: 'option1',
  width: 'auto',
  hidden: true
},{
  name: 'u_ip',
  label: 'u_ip',
  initialValue: 'option1',
  width: '20',
  hidden: true
},{
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
    "u_id": 1,
    "u_mail": "ervishu83@yahoo.com",
    "u_p": "$2b$10$UMAoQLduWIU/RLa1DgslAO6gDK5vKN8BfAxmIdN5cPAQt4kXuLf/G",
    "u_wallet": "0.00",
    "u_name": "Vicky",
    "u_surname": "Patel",
    "u_status": "active",
    "u_dob": "1983-10-25",
    "u_photo": "",
    "u_photo_path": "",
    "u_provider": "email",
    "u_provider_id": null,
    "u_provider_token": null,
    "createdAt": "2019-11-14T16:12:36.000Z",
    "updatedAt": "2019-12-12T13:50:33.000Z",
    "u_pwd_changed_at": "2019-11-15T08:15:39.000Z",
    "u_ip": "::1"
  }
];






