import Axios from 'axios';
import Qs from 'querystring';

export const anchorTable = [
{
  name: 'cg_id',
  label: 'Id',
  initialValue: '',
  hidden: true
},
{
  name: 'cam_id',
  label: 'Cam Id',
  initialValue: '',
  hidden: true
},
{
  name: 'c_name',
  label: 'Name',
  initialValue: null,
  width: 'auto',
  hidden: false
},
{
  name: 'cg_pic_blob',
  label: 'Blob',
  initialValue: null,
  width: 'auto',
  hidden: true
},  
{
  name: 'c_logo',
  label: 'Logo',
  initialValue: null,
  width: 'auto',
  hidden: false
},
{
  name: 'c_type',
  label: 'Type',
  initialValue: null,
  width: 50,
  hidden: true
}, 
{
  name: 'c_count',
  label: 'Type',
  initialValue: null,
  width: 50,
  hidden: true
}, 
{
  name: 'c_value',
  label: 'Value',
  initialValue: null,
  width: 50,
  hidden: true
},
{
  name: 'c_status',
  label: 'Status',
  initialValue: null,
  width: 50,
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
    "cg_id": 1,
    "cg_pic_blob": null,
    "c_status": null,
    "c_name": null,
    "c_logo": null,
    "c_type": null,
    "c_count": null,
  },
        
];






