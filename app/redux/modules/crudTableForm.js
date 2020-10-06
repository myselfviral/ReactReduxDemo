/* import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import {
  FETCH_DATA_FORM,
  ADD_NEW,
  CLOSE_FORM,
  SUBMIT_DATA,
  REMOVE_ROW_FORM,
  EDIT_ROW_FORM,
  CLOSE_NOTIF,
  FETCH_DATA_FORM_SUCCESS,
  FETCH_DATA_FORM_STARTED,
  FETCH_DATA_FORM_FAIL
} from '../../actions/actionConstants';

const initialState = {
  dataTable: List([]),
  dataInit: List([
    {
      u_id: '1',
      u_name: '',
      u_surname: '',
      u_mail: '',
      u_wallet: '',
      u_status: '',
      edited: true,
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
    }
  ]),
  formValues: Map(),
  editingId: '',
  showFrm: false,
  notifMsg: '',
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

  return Map(staticKey);
};
let editingIndex = 0;

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (action.type) {
       case `${branch}/${FETCH_DATA_FORM_STARTED}`:
      return state;
    case `${branch}/${FETCH_DATA_FORM_SUCCESS}`:
      return state.withMutations((mutableState) => {
        console.log('FETCH_DATA_FORM_SUCCESS');
        console.log('action.items', action.items);
        const items = fromJS(action.items);
        console.log('items', items);
        mutableState.set('dataTable', items);
      });
    case `${branch}/${FETCH_DATA_FORM_FAIL}`:
      console.log('FETCH_DATA_FORM_FAIL');
      return state;
    case `${branch}/${ADD_NEW}`:
      return state.withMutations((mutableState) => {
        const raw = fromJS(state.get('dataInit').last());
        const initial = initialItem(raw, action.anchor);
        mutableState.set('formValues', initial);
        mutableState.set('showFrm', true);
      });
    case `${branch}/${SUBMIT_DATA}`:
      return state.withMutations((mutableState) => {
        if (state.get('editingId') === action.newData.get('id')) {
          // Update data
          mutableState
            .update('dataTable', dataTable => dataTable.setIn([editingIndex], action.newData))
            .set('notifMsg', notif.updated);
        } else {
          // Insert data
          const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
          const initItem = Map(action.newData);
          const newItem = initItem.update('id', (val = id) => val);
          mutableState
            .update('dataTable', dataTable => dataTable.unshift(newItem))
            .set('notifMsg', notif.saved);
        }
        mutableState.set('showFrm', false);
        mutableState.set('formValues', Map());
      });
    case `${branch}/${CLOSE_FORM}`:
      return state.withMutations((mutableState) => {
        mutableState
          .set('formValues', Map())
          .set('showFrm', false);
      });
    case `${branch}/${REMOVE_ROW_FORM}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        mutableState
          .update('dataTable', dataTable => dataTable.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case `${branch}/${EDIT_ROW_FORM}`:
      return state.withMutations((mutableState) => {
        editingIndex = state.get('dataTable').indexOf(action.item);
        console.log('action.item', action.item);
      console.log('editingIndex', editingIndex);
      console.log('action.item.get(u_id)', action.item.get('u_id'));
        mutableState
          .set('formValues', action.item)
          .set('editingId', action.item.get('id'))
          .set('showFrm', true);
      });
    case `${branch}/${CLOSE_NOTIF}`:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
 */