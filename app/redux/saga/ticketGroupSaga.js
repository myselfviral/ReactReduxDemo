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
import Api from '../apis/TicketGroupApi';
import * as types from '../../actions/actionConstants';
import { anchorTable } from '../../containers/Tables/demos/AnchorTable/TicketGroupData';
const branch = 'ticketGroup';
// const branch = 'crudTbFrmDemo';

export function* watchFetchDatas(action) {
  yield put(fetchActionStarted(action.branch));
  try {
    const data = yield Api.getTicketgroups().then(response => response.json());
    yield put(fetchActionSuccess(data.ticket_groups, action.branch));
  } catch (e) {    
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
    if (arr.com_id === '' || arr.com_id === 0 || arr.com_id === undefined ) {
      const response = yield call(Api.addCompany, arr);
      if (response) {
        yield put(submitActionSuccess(response.data.company, action.branch));
      }
    } else {
      const response = yield call(Api.updateCompany, arr);
      if (response) {
        yield put(submitActionSuccess(arr, action.branch));
      }
    }
  } catch (e) {
    
    yield put(submitActionFail(e.message, action.branch));
  }
}
export function* updateActionSaga() {
  yield takeEvery(`${branch}/${types.SUBMIT_DATA}`, watchUpdateData);
}
export function* watchRemoveData(action) {
  
  yield put(removeActionStarted(action.branch));
  try {
    yield Api.deleteCompany(action.item.get('com_id'));
    yield put(removeActionSuccess(action.item, action.branch));
  } catch (e) {
    
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
  }
}

export function* AddActionSaga() {
  yield takeEvery(`${branch}/${types.ADD_NEW}`, addAction);
}
