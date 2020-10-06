import { call, put, takeEvery, takeLatest, all, fork, fromJS } from 'redux-saga/effects';
import * as types from '../../actions/actionConstants';
import Axios from 'axios';
import Qs from 'querystring';
import {
  FETCH_DATA_FORM,
  ADD_NEW,
  CLOSE_FORM,
  CLOSE_FORM_SUCCESS,
  SUBMIT_DATA,
  REMOVE_ROW_FORM,
  EDIT_ROW_FORM,
  CLOSE_NOTIF,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAIL,
  EDIT_ROW_FORM_FAIL,
  EDIT_ROW_FORM_SUCCESS,
  Api_url
} from '../../actions/actionConstants';

import {
  fetchAction,
  fetchActionStarted,
  fetchActionSuccess,
  fetchActionFail,
  addAction,
  addActionStarted,
  addActionSuccess,
  addActionFail,
  closeAction,
  closeActionSuccess,
  submitActionSuccess,
  submitAction,
  submitActionFail,
  removeActionSuccess,
  removeActionFail,
  removeAction,
  editAction,
  editActionSuccess,
  editActionFail,
  closeNotifAction,
} from '../../actions/BarcodeGroupActions';

import Api from '../apis/crudFormapi';
import { API_URL } from '../../config/applicationConstatnt';
import { anchorTable } from '../../containers/Tables/demos/AnchorTable/UserData';


const branch = 'crudTbFrmDemo';
const token = localStorage.getItem('access_token');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + token
  },

};
/*async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Unexpected error!!!");
}*/


export function* fetchUser(action) {

  yield put(fetchActionStarted(action.branch));
  try {
    const page = action.page === undefined ? 1 : action.page;
    const response = yield call(Api.getUsersPage, action);
    console.log('response fetchActionStarted', response);
    if (response) {
      console.log('response', response);
      const items = response.data.users;
      yield put(fetchActionSuccess(items, action.branch, page, response.data.users_count));
    }
  } catch (e) {
    yield put(fetchActionFail(e.message, action.branch));

  }
}

export function* addUser(action) {
  yield put(addActionStarted(action.branch));
  try {
    yield put(addActionSuccess(anchorTable, action.branch));
  } catch (e) {
    yield put(addActionFail(e.message));
  }
}
export function* editUser(values) {
  let row_data = JSON.stringify(values, null, 2);
  let edit_data = JSON.parse(row_data);
  try {
    let u_id = edit_data.newData.u_id;
    const user_detail = yield fetchAsync(Api.getUser_detail(u_id), action);
    yield put(editActionSuccess(user_detail, action.branch));
  } catch (e) {
    yield put(editActionFail(e.message));
    // yield put({type: `${branch}/${types.ADD_NEW}`, error: e.message});
  }
}
export function* removeUser(values) {
  let row_data_for_delete = JSON.stringify(values, null, 2);
  let delete_row_data = JSON.parse(row_data_for_delete);
  let row_id = delete_row_data.item.u_id;
  try {
    Axios.delete(API_URL + '/users/' + row_id, config)
      .then((result) => {
        const user_detail = result.data;
      }).catch((error) => {
        console.log(error);
      });
    yield put(removeActionSuccess(user_detail, action.branch));
  } catch (e) {
    yield put(removeActionFail(e.message));
    // yield put({type: `${branch}/${types.ADD_NEW}`, error: e.message});
  }
}

export function* submitUser(newdata) {
  let requestBody = JSON.stringify(newdata.newData);
  let submit_data = JSON.parse(requestBody);
  try {
    if (submit_data.u_id === '' || submit_data.u_id === 0 || submit_data.u_id === undefined) {
      const response = yield call(Api.addUser, submit_data);
      if (response) {
        yield put(submitActionSuccess(response.data.user, newdata.branch));
      }
      //  yield put(submitActionSuccess(data ,newdata.branch));
    } else {
      const response = yield call(Api.updateUser, submit_data);
      if (response) {
        yield put(submitActionSuccess(submit_data, newdata.branch));
      }
    }
  } catch (e) {
    yield put(submitActionFail(e.message));
    // yield put({type: `${branch}/${types.ADD_NEW}`, error: e.message});
  }
}
export function* closebutton(action) {
  try {
    yield put(closeActionSuccess(action.branch));
  } catch (e) { }
}
export function* closeaction() {
  yield takeEvery(`${branch}/${CLOSE_FORM}`, closebutton);
}


export function* fetchUsersdata() {
  yield takeEvery(`${branch}/${FETCH_DATA_FORM}`, fetchUser);
}

export function* adduserdata() {

  yield takeEvery(`${branch}/${ADD_NEW}`, addUser);
}

export function* edituserdata() {
  yield takeEvery(`${branch}/${EDIT_ROW_FORM}`, editUser);
}


export function* submitdata() {
  yield takeEvery(`${branch}/${SUBMIT_DATA}`, submitUser);
}
export function* removedata() {
  yield takeEvery(`${branch}/${REMOVE_ROW_FORM}`, removeUser);
}
