import { put, takeEvery, call } from 'redux-saga/effects';
import {
  fetchActionStarted,
  fetchActionSuccess,
  fetchActionFail,
  submitActionStarted,
  submitActionSuccess,
  submitActionFail,
  removeActionStarted,
  removeActionSuccess,
  removeActionFail,
  addActionStarted,
  addActionSuccess,
  addActionFail,
} from '../../actions/BarcodeGroupActions';
import Api from '../apis/BarcodeGroupApi';
import * as types from '../../actions/actionConstants';
import { anchorTable } from '../../containers/Tables/demos/AnchorTable/BarcodeGroupData';
 const branch = 'barcodeGroup';
// const branch = 'crudTbFrmDemo';

export function* watchFetchDatas(action) {
  yield put(fetchActionStarted(action.branch));
  try {
    const response = yield call(Api.getBarcodeGroupsPage, action);
    if (response) {
      yield put(fetchActionSuccess(response.data.barcode_groups, action.branch,action.page,response.data.barcode_groups_count));
      console.log('response.barcode_groups_count', response);
    }
  } catch (e) {
    console.log(e.message);
    yield put(fetchActionFail(e.message, action.branch));
  }
}
export function* fetchActionSaga() {
  yield takeEvery(`${branch}/${types.FETCH_DATA_FORM}`, watchFetchDatas);
}
export function* watchUpdateData(action) {
  yield put(submitActionStarted(action.branch));
  const str = JSON.stringify(action.newData);
  const arr = JSON.parse(str);
  if (action.newData.size < 2 || arr.bg_id === 0) {
    try {
      const data = yield Api.addBarcodeGroup(arr).then(response => console.log(JSON.stringify(response)));
      yield put(submitActionSuccess(action.newData, action.branch));
    } catch (e) {
      console.log(e.message);
      yield put(submitActionFail(e.message, action.branch));
    }
  }

  else {

    try {
      yield Api.updateBarcodeGroup(arr).then(response => console.log(JSON.stringify(response)));
      yield put(submitActionSuccess(action.newData, action.branch));
    } catch (e) {
      console.log(e.message);
      yield put(submitActionFail(e.message, action.branch));
    }
  }
}
export function* updateActionSaga() {
  yield takeEvery(`${branch}/${types.SUBMIT_DATA}`, watchUpdateData);
}
export function* watchRemoveData(action) {
  yield put(removeActionStarted(action.branch));
  try {
    yield Api.deleteBarcodeGroup(action.item.get('bg_id'));
    yield put(removeActionSuccess(action.item, action.branch));
  } catch (e) {
    console.log(e.message);
    yield put(removeActionFail(e.message, action.branch));
  }
}
export function* removeActionSaga() {
  yield takeEvery(`${branch}/${types.REMOVE_ROW_FORM}`, watchRemoveData);
}


export function* addAction(action) {
  try {
    yield put(addActionStarted(action.branch));
    yield put(addActionSuccess(anchorTable, action.branch));
  } catch (e) {
    yield put(addActionFail(e.message));
    // yield put({type: `${branch}/${types.ADD_NEW}`, error: e.message});
  }
}

export function* AddActionSaga() {
  yield takeEvery(`${branch}/${types.ADD_NEW}`, addAction);
}
/* 
 export function* editUser(values){
  let row_data = JSON.stringify(values, null, 2);
  let edit_data = JSON.parse(row_data);
  try{
    let u_id = edit_data.newData.u_id;
    const user_detail = yield fetchAsync(Api.getUser_detail(u_id), action);
    yield put(editActionSuccess(user_detail, action.branch));
  } catch (e){
    yield put(editActionFail(e.message));
    // yield put({type: `${branch}/${types.ADD_NEW}`, error: e.message});
  }

}  */

/* function* rootSaga() {
  yield all([
    fork(fetchActionSaga),
    // fork(addActionSaga),
    fork(updateActionSaga),
    fork(removeActionSaga)
  ]);
};
export default rootSaga; */
