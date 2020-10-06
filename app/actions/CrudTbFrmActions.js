/* import * as types from './actionConstants';

// const branch = 'crudTbFrmDemo';

export const fetchAction = (items, branch, page, rowCount) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM}`,
  items,
  page,
  rowCount,
});
export const fetchActionStarted = (branch) => ({
  branch: '',
  type: `${branch}/${types.FETCH_DATA_FORM_STARTED}`,
  items: {}
});
export const fetchActionSuccess = (items, branch, page, rowCount) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_SUCCESS}`,
  items,
  page,
  rowCount
});
export const fetchActionFail = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_FAIL}`,
  items
});


export const addActionSuccess = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW_SUCCESS}`,
  anchor
});

export const addAction = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`,
  anchor
});

export const addActionFail = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW_FAIL}`,
  
});

export const closeAction = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_FORM}`
});

export const closeActionSuccess = branch =>({
  branch,
  type: `${branch}/${types.CLOSE_FORM_SUCCESS}`
});


export const submitActionSuccess = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_SUCCESS}`,
  newData
});

export const submitAction = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA}`,
  newData
});

export const submitActionFail = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_FAIL}`,
  
});

export const removeActionSuccess = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_SUCCESS}`,
  item
});

export const removeAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM}`,
  item
});

export const removeActionFail = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_FAIL}`,
  item
});

export const editActionSuccess = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM_SUCCESS}`,
  item
});

export const editAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM}`,
  item
});

export const editActionFail = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM_FAIL}`,
  item
});



export const closeNotifAction = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_NOTIF}`,
});
 */