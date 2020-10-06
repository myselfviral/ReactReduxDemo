import * as types from './actionConstants';

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

export const addAction = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`,
  anchor
});
export const addActionStarted = (branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`
});
export const addActionSuccess = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`,
  anchor
});
export const addActionFail = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`,
  anchor
});

export const closeAction = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_FORM}`
});

export const submitAction = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA}`,
  newData
});
export const submitActionStarted = (branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_STARTED}`
});
export const submitActionSuccess = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_SUCCESS}`,
  newData
});
export const submitActionFail = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA_FAIL}`,
  newData
});

export const removeAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM}`,
  item
});
export const removeActionStarted = (branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_STARTED}`
});
export const removeActionSuccess = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_SUCCESS}`,
  item
});
export const removeActionFail = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM_FAIL}`,
  item
});

export const editAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM}`,
  item
});

export const closeNotifAction = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_NOTIF}`,
});


export const fetchActionWithParent = (items, branch, parents, page) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_PARENT}`,
  items,
  parents,
  page,
});
export const fetchActionWithParentStarted = (branch) => ({
  branch: '',
  type: `${branch}/${types.FETCH_DATA_FORM_PARENT_STARTED}`,
  items: {},
  parents: {}
});
export const fetchActionWithParentSuccess = (items, branch, parents, page) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_PARENT_SUCCESS}`,
  items,
  parents,
  page,
});
export const fetchActionWithParentFail = (items, branch, parents, page) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM_PARENT_FAIL}`,
  items,
  parents,
  page,
});


export const filterAction = (id, branch, items) => ({
  branch,
  type: `${branch}/${types.FILTER_DATA_FORM}`,
  items,
  id,
});
export const filterActionStarted = (branch) => ({
  branch,
  type: `${branch}/${types.FILTER_DATA_FORM_STARTED}`,

});
export const filterActionSuccess = (id, branch, items) => ({
  branch,
  type: `${branch}/${types.FILTER_DATA_FORM_SUCCESS}`,
  items,
  id,
});
export const filterActionFail = (id, branch, items) => ({
  branch,
  type: `${branch}/${types.FILTER_DATA_FORM_FAIL}`,
  items,
  id,
});
