/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import login from './modules/login';
import uiReducer from './modules/ui';
import initval from './modules/initForm';

//import crudTableForm from './modules/crudTableForm';
//import crudTableCompany from './modules/crudTableCompany';
import barcodeGroupReducer from './modules/barcodeGroupReducer';



/**
 * Creates the main reducer with the dynamically injected ones
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    login,
    ui: uiReducer,
    initval,
    //crudTableForm,
    barcodeGroupReducer,
    crudTbFrmDemo: branchReducer(barcodeGroupReducer, 'crudTbFrmDemo'),
    //crudTableCompany,
    crudTbCompDemo: branchReducer(barcodeGroupReducer, 'crudTbCompDemo'),

    barcodeGroup: branchReducer(barcodeGroupReducer, 'barcodeGroup'),

    campaign: branchReducer(barcodeGroupReducer, 'campaign'),

    ticket: branchReducer(barcodeGroupReducer, 'ticket'),

    ticketGroup: branchReducer(barcodeGroupReducer, 'ticketGroup'),

    couponGroup: branchReducer(barcodeGroupReducer, 'couponGroup'),

    coupon: branchReducer(barcodeGroupReducer, 'coupon'),


    subscriber: branchReducer(barcodeGroupReducer, 'subscriber'),


    barcode: branchReducer(barcodeGroupReducer, 'barcode'),

    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
