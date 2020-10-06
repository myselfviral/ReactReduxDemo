import { all, fork } from 'redux-saga/effects';
import * as crudTableFormSaga from './crudFormSaga';
import * as crudTableFormCompany from './companySaga';
import * as barcodeGroupSaga from './barcodeGroupSaga';
import * as campaignSaga from './campaignSaga';
import * as barcodeSaga from './barcodeSaga';
import * as subscirberSaga from './subscriberSaga';
import * as ticketSaga from './ticketSaga';
import * as ticketGroupSaga from './ticketGroupSaga';
import * as couponGroupSaga from './couponGroupSaga';
import * as couponSaga from './couponSaga';


function* rootSaga() {
  yield all([
    fork(crudTableFormSaga.fetchUsersdata),
    //fork(crudTableFormSaga.adduserdata),
    fork(crudTableFormSaga.submitdata),
    fork(crudTableFormSaga.removedata),
    fork(crudTableFormSaga.closeaction),

		
    
    fork(crudTableFormCompany.fetchActionSaga),
    fork(crudTableFormCompany.updateActionSaga),
    fork(crudTableFormCompany.removeActionSaga),
    fork(crudTableFormCompany.removeActionSaga),


    fork(barcodeGroupSaga.fetchActionSaga),
    fork(barcodeGroupSaga.updateActionSaga),
    fork(barcodeGroupSaga.removeActionSaga),
    //fork(barcodeGroupSaga.AddActionSaga)

    fork(subscirberSaga.fetchActionSaga),
    fork(subscirberSaga.updateActionSaga),
    fork(subscirberSaga.removeActionSaga),

    fork(ticketSaga.fetchActionSaga),
    fork(ticketSaga.updateActionSaga),
    fork(ticketSaga.removeActionSaga),

    fork(ticketGroupSaga.fetchActionSaga),
    fork(ticketGroupSaga.updateActionSaga),
    fork(ticketGroupSaga.removeActionSaga),


    fork(couponGroupSaga.fetchActionSaga),
    fork(couponGroupSaga.updateActionSaga),
    fork(couponGroupSaga.removeActionSaga),

    fork(couponSaga.fetchActionSaga),
    fork(couponSaga.updateActionSaga),
    fork(couponSaga.removeActionSaga),

    fork(campaignSaga.fetchActionSaga),
    fork(campaignSaga.updateActionSaga),
    fork(campaignSaga.removeActionSaga),


    fork(barcodeSaga.fetchActionSaga),
    fork(barcodeSaga.updateActionSaga),
    fork(barcodeSaga.removeActionSaga),
    fork(barcodeSaga.filterActionSaga),
    
    
  ]);
};

export default rootSaga;

