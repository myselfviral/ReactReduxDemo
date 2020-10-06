import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
  SelectRedux,
  TextFieldRedux
} from 'dan-components/Forms/ReduxFormMUI';
import {
  fetchActionWithParent,
  addAction,
  closeAction,
  submitAction,
  removeAction,
  editAction,
  closeNotifAction,
  filterAction,
} from 'dan-actions/BarcodeGroupActions';
import { CrudTableForm, Notification } from 'dan-components';
import { anchorTable, dataApi } from './AnchorTable/BarcodeData';
import { ThemeProvider } from 'react-jss';

const branch = 'barcode';
// const branch = 'crudTbFrmDemo';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const styles = ({
  root: {
    flexGrow: 1,
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  
  
});

class Barcode extends Component {
  saveRef = ref => {
    this.ref = ref;
    return this.ref;
  };


  render() {
    const {
      classes,
      fetchData,
      addNew,
      closeForm,
      submit,
      removeRow,
      editRow,
      dataTable,
      openForm,
      initValues,
      closeNotif,
      messageNotif,
      parents,
      filterFunc,
      onChangePage,
      page
    } = this.props;
    const trueBool = true;
    let menu;
    const getBarcodeGroup = dataArray => dataArray.map(item => (
      <MenuItem value={item.get('bg_id')} key={item.get('bg_id')}>{item.get('bg_code')}</MenuItem>
    ));  
    if (parents === undefined) {
      menu = <MenuItem value="Arimex">Arimex</MenuItem>
    } else {
      menu = getBarcodeGroup(parents);
    }
    if (parents !== undefined && anchorTable !== undefined) {
      const itemIndex = anchorTable.findIndex(a => a.name === 'filter');
      anchorTable[itemIndex].initialValue = parents;
    }
    



    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <div className={classes.rootTable}>
          <CrudTableForm
            dataTable={dataTable}
            openForm={openForm}
            dataInit={dataApi}
            anchor={anchorTable}
            title=""
            fetchData={fetchData}
            addNew={addNew}
            closeForm={closeForm}
            submit={submit}
            removeRow={removeRow}
            editRow={editRow}
            branch={branch}
            initValues={initValues}
            filterFunc={filterFunc}
            filterID="bg_id"
            filterValue="bg_code"
            filterItems={parents}
            page={page}
            onChangePage={fetchData}
          >
            {/* Create Your own form, then arrange or custom it as You like */}
          
            <div>
              <FormControl className={classes.field}>
                <InputLabel htmlFor="Barcode Group">Barcode Group</InputLabel>
                <Field
                  name="bg_id"
                  component={SelectRedux}
                  placeholder="Barcode Group"
                  autoWidth={trueBool}
                >
                  {menu}
                </Field>
              </FormControl>
            </div>
            <div>
              <Field
                name="b_code"
                component={TextFieldRedux}
                placeholder="Code"
                label="Code"
                validate={required}
                required
                ref={this.saveRef}
                className={classes.field}
              />
            </div>
            
            {/* No need create button or submit, because that already made in this component */}
          </CrudTableForm>
        </div>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

Barcode.propTypes = {
  dataTable: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  initValues: PropTypes.object.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
  parents: PropTypes.object.isRequired,
  filterFunc: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number,
};
Barcode.defaultProps = {
  page: 0
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  initValues: state.getIn([branch, 'formValues']),
  dataTable: state.getIn([branch, 'dataTable']),
  openForm: state.getIn([branch, 'showFrm']),
  messageNotif: state.getIn([branch, 'notifMsg']),
  parents: state.getIn([branch, 'parents']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchActionWithParent, dispatch),
  addNew: bindActionCreators(addAction, dispatch),
  closeForm: bindActionCreators(closeAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
  filterFunc: bindActionCreators(filterAction, dispatch),
  onChangePage: bindActionCreators(fetchActionWithParent, dispatch),
});

const BarcodeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Barcode);

export default withStyles(styles)(BarcodeMapped);
