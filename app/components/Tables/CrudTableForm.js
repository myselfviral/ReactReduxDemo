import React from 'react';
import PropTypes from 'prop-types';
import Form from './tableParts/Form';
import MainTableForm from './tableParts/MainTableForm';
import FloatingPanel from '../Panel/FloatingPanel';
import { mapProps } from 'recompose';

class CrudTableForm extends React.Component {
  componentDidMount() {
    const { fetchData, dataInit, branch } = this.props;
    fetchData(dataInit, branch);
    
  }

  sendValues = (values) => {
    const { submit, branch } = this.props;
    setTimeout(() => {
      submit(values, branch);
    }, 500);

  }

  render() {
    const {
      title,
      dataTable,
      openForm,
      closeForm,
      removeRow,
      addNew,
      editRow,
      anchor,
      children,
      branch,
      initValues,
      filterFunc,
      filterID,
      filterValue,
      filterItems,
      page,
      onChangePage,
      rowCount,
    } = this.props;
    return (
      <div>
        <FloatingPanel openForm={openForm} branch={branch} closeForm={closeForm}>
          <Form onSubmit={this.sendValues} initValues={initValues} branch={branch}>
            {children}
          </Form>
        </FloatingPanel>
        <MainTableForm
          title={title}
          addNew={addNew}
          items={dataTable}
          removeRow={removeRow}
          editRow={editRow}
          anchor={anchor}
          branch={branch}
          filterFunc={filterFunc}
          filterID={filterID}
          filterValue={filterValue}
          filterItems={filterItems}
          page={page}
          onChangePage={onChangePage}
          rowCount={rowCount}
        />
      </div>
    );
  }
}

CrudTableForm.propTypes = {
  title: PropTypes.string.isRequired,
  anchor: PropTypes.array.isRequired,
  dataInit: PropTypes.array.isRequired,
  dataTable: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  openForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  initValues: PropTypes.object.isRequired,
  branch: PropTypes.string.isRequired,
  filterFunc: PropTypes.func.isRequired,
  filterID: PropTypes.string,
  filterValue: PropTypes.string,
  filterItems: PropTypes.array,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  rowCount: PropTypes.number
};
CrudTableForm.defaultProps = {
  filterID: '',
  filterValue: '',
  filterItems:[],
  filterFunc: (()=> {}),

};
export default CrudTableForm;
  