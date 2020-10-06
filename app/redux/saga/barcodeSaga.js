import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchActionWithParentStarted,
  fetchActionWithParentSuccess,
  fetchActionWithParentFail,
  submitActionStarted,
  submitActionSuccess,
  submitActionFail,
  removeActionStarted,
  removeActionSuccess,
  removeActionFail,
  addActionStarted,
  addActionSuccess,
  addActionFail,
  filterActionStarted,
  filterActionSuccess,
  filterActionFail,
} from '../../actions/BarcodeGroupActions';
import Api from '../apis/BarcodeApi';
import ApiBarcodeGroup from '../apis/BarcodeGroupApi';
import * as types from '../../actions/actionConstants';
import { anchorTable } from '../../containers/Tables/demos/AnchorTable/BarcodeData';
const branch = 'barcode';
// const branch = 'crudTbFrmDemo';

export function* watchFetchDatas(action) {
  yield put(fetchActionWithParentStarted(action.branch));
  try {
    const page = action.page === undefined ? 0 : action.page;
    const data = yield Api.getBarcodes().then(response => response.json());
    const Parentdata = yield ApiBarcodeGroup.getBarcodeGroups().then(response => response.json());
    if (data.barcodes !== undefined && Parentdata.barcode_groups !== undefined) {
      yield put(fetchActionWithParentSuccess(data.barcodes, action.branch, Parentdata.barcode_groups, page ));
    }
  } catch (e) {
    console.log(e.message);
    yield put(fetchActionWithParentFail(e.message, action.branch));
  }
}
export function* fetchActionSaga() {
  yield takeEvery(`${branch}/${types.FETCH_DATA_FORM_PARENT}`, watchFetchDatas);
}
export function* watchUpdateData(action) {
  yield put(submitActionStarted(action.branch));
  const str = JSON.stringify(action.newData);  
  const arr = JSON.parse(str);
  try {
    if (arr.b_id === '' || arr.b_id === 0 || arr.b_id === undefined ) {
      const response = yield call(Api.addBarcode, arr);
      if (response) {
        yield put(submitActionSuccess(response.data.barcode, action.branch));
      }
    } else {
      const response = yield call(Api.updateBarcode, arr);
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
    yield Api.deleteCampaign(action.item.get('b_id'));
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
  }
}

export function* AddActionSaga() {
  yield takeEvery(`${branch}/${types.ADD_NEW}`, addAction);
}



export function* watchFilterData(action) {
  yield put(filterActionStarted(action.branch));
  try {
    const response = yield call(Api.getBarcodebyGroup, action.id);
    if (response) {
      yield put(filterActionSuccess(action.id, action.branch, response.data.barcodes));
    }
  } catch (e) {
    console.log(e.message);
    yield put(filterActionFail(action.id, action.branch, e.message));
  }
}
export function* filterActionSaga() {
  yield takeEvery(`${branch}/${types.FILTER_DATA_FORM}`, watchFilterData);
}