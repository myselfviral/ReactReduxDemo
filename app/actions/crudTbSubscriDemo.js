/* import * as types from './actionConstants';

const branch = 'crudTbSubscriDemo';

export const fetchActionSubscriber = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_SUBSCRIBER}`,
  items
});
export const fetchActionStartedSubscriber = (branch) => ({
  branch: '',
  type: `${branch}/${types.FETCH_DATA_FORM_STARTED_COMPANY}`,
  items: {}
});
export const fetchActionSuccessSubscriber = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_COMPANY_SUCCESS}`,
  items
});
export const fetchActionFailSubscriber = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_COMPANY_FAIL}`,
  items
});


export const addActionSuccessSubscriber = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW_SUCCESS}`,
  anchor
});

export const addActionSubscriber = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW_COMPANY}`,
  anchor
});

export const addActionFailSubscriber = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW_FAIL}`,
  
});

export const closeActionSubscriber = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_FORM_COMPANY}`
});

export const closeActionSuccessSubscriber = branch =>({
  branch,
  type: `${branch}/${types.CLOSE_FORM_COMPANY_SUCCESS}`
});


export const submitActionSuccessCompany = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_COMPANY_SUCCESS}`,
  newData
});

export const submitActionCompany = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_COMPANY}`,
  newData
});

export const submitActionFailCompany = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_COMPANY_FAIL}`,
  
});

export const removeActionSuccessCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_COMPANY_SUCCESS}`,
  item
});

export const removeActionCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_COMPANY}`,
  item
});

export const removeActionFailCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_COMPANY_FAIL}`,
});

export const editActionSuccessCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM_COMPANY_SUCCESS}`,
  item
});

export const editActionCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM_COMPANY}`,
  item
});

export const editActionFailCompany = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM_COMPANY_FAIL}`,
});



export const closeNotifActionCompany = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_NOTIF}`,
});
 */