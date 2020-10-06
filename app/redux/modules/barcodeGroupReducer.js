import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import {
  ADD_NEW,
  CLOSE_FORM,
  SUBMIT_DATA,
  EDIT_ROW_FORM,
  CLOSE_NOTIF,
  FETCH_DATA_FORM_FAIL,
  FETCH_DATA_FORM_STARTED,
  FETCH_DATA_FORM_SUCCESS,
  REMOVE_ROW_FORM_STARTED,
  REMOVE_ROW_FORM_SUCCESS,
  REMOVE_ROW_FORM_FAIL,
  SUBMIT_DATA_STARTED,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAIL,
  FETCH_DATA_FORM_PARENT_FAIL,
  FETCH_DATA_FORM_PARENT_STARTED,
  FETCH_DATA_FORM_PARENT_SUCCESS,
  FILTER_DATA_FORM_STARTED,
  FILTER_DATA_FORM_SUCCESS,
  FILTER_DATA_FORM_FAIL,
} from '../../actions/actionConstants';

let dataInit = List([
  {
    bg_id: 0,
    bg_code: ''
  }
]);
let id;


const initialState = {
  dataTable: List([]),
  formValues: Map(),
  editingId: '',
  showFrm: false,
  notifMsg: '',
  parents: [],
};


const initialItem = (keyTemplate, anchor) => {
  const [...rawKey] = keyTemplate.keys();
  const staticKey = {};
  for (let i = 0; i < rawKey.length; i += 1) {
    if (rawKey[i] !== 'id') {
      const itemIndex = anchor.findIndex(a => a.name === rawKey[i]);
      staticKey[rawKey[i]] = anchor[itemIndex].initialValue;
    }
  }
  console.log("S-key",staticKey);
  return Map(staticKey);
};
let editingIndex = 0;

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (branch) {
    case 'crudTbFrmDemo':
      dataInit = List([
        {
          u_id: '1',
          u_name: '',
          u_surname: '',
          u_mail: '',
          u_wallet: '',
          u_status: '',
          u_p:'',
          u_dob:'',
          u_photo:'',
          u_photo_path:'',
          u_provider:'',
          u_provider_id:'',
          u_provider_token:'',
          createdAt:'',
          updatedAt:'',
          u_pwd_changed_at:'',
          u_ip:'',
          edited: true,
        }
      ]);
      id = 'u_id';
      break;
    case 'barcodeGroup':
      dataInit = List([
        {
          bg_id: 0,
          bg_code: ''
        }
      ]);
      id = 'bg_id';
      break;
    case 'campaign':
      dataInit = List([
        {
          cam_id: 0,
          cam_name: '',
          cam_code: ''
        }
      ]);
      id = 'cam_id';
      break;
    case 'crudTbCompDemo':
      dataInit = List([
        {
          com_id: 0,
          com_name: '',
          com_logo: '',
          com_logopath: '',
          com_phone: '',
          com_street1: '',
          com_street2: '',
          com_city: '',
          com_state: '',
          com_zipcode: '',
          com_country: '',
          createdAt: '',
          updatedAt: '',
          edited: true,
        }
      ]);
      id = 'com_id';
      break;
    case 'subscriber':
      dataInit = List([
        {
          sub_id: 0,
          sub_email: '',
          sub_ip: '',
          createdAt: '',
          updatedAt: '',
          edited: true,
        }
      ]);
      id = 'sub_id';
      break;
    case 'ticket':
      dataInit = List([
        {
          t_id: 0,
          tg_id: '',
          cam_id: '',
          createdAt: '',
          updatedAt: '',
          edited: true,
        }
      ]);
      id = 't_id';
      break;
    case 'ticketGroup':
      dataInit = List([
        {
          tg_id: 0,
          tg_game_type: '',
          createdAt: '',
          updatedAt: '',
          edited: false,
        }
      ]);
      id = 'tg_id';
      break;
    case 'couponGroup':
      dataInit = List([
        {
          cg_id: '1',
          cam_id: '',
          cg_pic_blob: '',
          c_status: '',
          c_name: '',
          c_count: '',
          c_logo: '',
          c_type: '',
          c_value: '',
          createdAt: '',
          updatedAt: ''
        }
      ]);
      id = 'cg_id';
      break;
    case 'coupon':
      dataInit = List([
        {
          c_id: '1',
          cg_id: '',
          c_code: '',
          createdAt: '',
          updatedAt: ''
        }
      ]);
      id = 'cg_id';
      break;
    case 'barcode':
      dataInit = List([
        {
          b_id: 0,
          b_code: '',
          bg_id: 0
        }
      ]);
      id = 'b_id';
    default:
      break;

  }

  switch (action.type) {
    case `${branch}/${FETCH_DATA_FORM_STARTED}`:
      return state;
    case `${branch}/${FETCH_DATA_FORM_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('dataTable', items);
        mutableState.set('rowCount', action.rowCount);
        console.log('action.rowCount', action.rowCount);

      });
    case `${branch}/${FETCH_DATA_FORM_FAIL}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('notifMsg', items);
      });
    case `${branch}/${ADD_NEW}`:
      return state.withMutations((mutableState) => {
        const raw = fromJS(dataInit.last());
        const initial = initialItem(raw, action.anchor);
        mutableState.set('formValues', initial);
        mutableState.set('showFrm', true);

      });
    case `${branch}/${SUBMIT_DATA_STARTED}`:
      return state;
    case `${branch}/${SUBMIT_DATA_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const udata = Map(action.newData)
        if (state.get('editingId') === udata.get(id)) {
          // Update data
          mutableState
            .update('dataTable', dataTable => dataTable.setIn([editingIndex], udata))
            .set('notifMsg', notif.updated);
        } else {
          // Insert data
          const _id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
          const initItem = Map(action.newData);
          const newItem = initItem.update(id, (val = _id) => val);
          mutableState
            .update('dataTable', dataTable => dataTable.unshift(newItem))
            .set('notifMsg', notif.saved);
        }
        mutableState.set('showFrm', false);
        mutableState.set('formValues', Map());

      });
    case `${branch}/${SUBMIT_DATA_FAIL}`:
      return state.withMutations((mutableState) => {
        const newData = fromJS(action.newData);
        mutableState.set('notifMsg', newData);
      });

    case `${branch}/${CLOSE_FORM}`:
      return state.withMutations((mutableState) => {
        mutableState
          .set('formValues', Map())
          .set('showFrm', false);

      });
    case `${branch}/${REMOVE_ROW_FORM_STARTED}`:
      return state;
    case `${branch}/${REMOVE_ROW_FORM_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        mutableState
          .update('dataTable', dataTable => dataTable.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case `${branch}/${REMOVE_ROW_FORM_FAIL}`:
      return state.withMutations((mutableState) => {
        const item = fromJS(action.item);
        mutableState.set('notifMsg', item);
      });
    case `${branch}/${EDIT_ROW_FORM}`:
      return state.withMutations((mutableState) => {
        editingIndex = state.get('dataTable').indexOf(action.item);
        mutableState
          .set('formValues', fromJS(action.item))
          .set('editingId', action.item.get(id))
          .set('showFrm', true);

      });
    case `${branch}/${CLOSE_NOTIF}`:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');

      });
    case `${branch}/${FETCH_DATA_FORM_PARENT_STARTED}`:
      return state;
    case `${branch}/${FETCH_DATA_FORM_PARENT_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        const parents = fromJS(action.parents);
        mutableState.set('dataTable', items);
        mutableState.set('parents', parents);

      });
    case `${branch}/${FETCH_DATA_FORM_PARENT_FAIL}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('notifMsg', items);
      });
    case `${branch}/${FILTER_DATA_FORM_STARTED}`:
      return state;
    case `${branch}/${FILTER_DATA_FORM_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('dataTable', items);
      });
    case `${branch}/${FILTER_DATA_FORM_FAIL}`:
      console.log('FILTER_DATA_FORM_FAIL');
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('notifMsg', items);
      });
    default:
      return state;
  }
}
