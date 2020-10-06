import { call, put, takeEvery } from 'redux-saga/effects';
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
import Api from '../apis/CampaignApi';
import * as types from '../../actions/actionConstants';
import { anchorTable } from '../../containers/Tables/demos/AnchorTable/CampaignData';
const branch = 'campaign';
// const branch = 'crudTbFrmDemo';

export function* watchFetchDatas(action) {
  yield put(fetchActionStarted(action.branch));
  try {
    const data = yield Api.getCampaigns().then(response => response.json());
    yield put(fetchActionSuccess(data.campaigns, action.branch));
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
  try {
    if (arr.cam_id === '' || arr.cam_id === 0 || arr.cam_id === undefined ) {
      const response = yield call(Api.addCampaign, arr);
      if (response) {
        yield put(submitActionSuccess(response.data.campaign, action.branch));
      }
    } else {
      const response = yield call(Api.updateCampaign, arr);
      if (response) {
        yield put(submitActionSuccess(arr, action.branch));
      }
    }
  } catch (e) {
    console.log(e.message);
    yield put(submitActionFail(e.message, action.branch));
  }
}
export function* updateActionSaga() {
  yield takeEvery(`${branch}/${types.SUBMIT_DATA}`, watchUpdateData);
}
export function* watchRemoveData(action) {
  yield put(removeActionStarted(action.branch));
  try {
    yield Api.deleteCampaign(action.item.get('cam_id'));
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
