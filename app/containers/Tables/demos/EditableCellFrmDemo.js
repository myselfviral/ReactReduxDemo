import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Axios from 'axios';
import Qs from 'querystring';
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux
} from 'dan-components/Forms/ReduxFormMUI';
import {
  fetchAction,
  addAction,
  closeAction,
  submitAction,
  removeAction,
  editAction,
  closeNotifAction
} from 'dan-actions/BarcodeGroupActions.js';
import { CrudTableForm, Notification } from 'dan-components';
import { anchorTable, dataApi } from './sampleData';

const branch = 'crudTbFrmDemo';


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
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

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
  }
});
//let dataApi = [];
class CrudTbFormDemo extends Component {
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
      page,   
      onChangePage,
      rowCount,
    } = this.props;
    const trueBool = true;
    console.log('rowCount',rowCount);
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
            page={page}
            onChangePage={onChangePage}
            rowCount={rowCount}
          >
            {/* Create Your own form, then arrange or custom it as You like */}
            <div>
              <Field
                name="u_name"
                component={TextFieldRedux}
                placeholder="Name"
                label="Name"
                validate={required}
                required
                //ref={this.saveRef}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="u_surname"
                component={TextFieldRedux}
                placeholder="Last name"
                label="Last name"
                validate={required}
                required
                ref={this.saveRef}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="u_mail"
                component={TextFieldRedux}
                placeholder="Email Field"
                label="Email"
                required
                validate={[required, email]}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="u_wallet"
                component={TextFieldRedux}
                placeholder="Wallet"
                label="Wallet"
                validate={required}
                required
                ref={this.saveRef}
                className={classes.field}
              />
            </div>
            <div className={classes.fieldBasic}>
              <FormLabel component="label">Toggle Input</FormLabel>
              <div className={classes.inlineWrap}>
                <FormControlLabel control={<Field name="u_status" component={SwitchRedux} />} label="Active/Inactive" />
              </div>
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

CrudTbFormDemo.propTypes = {
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
  page: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};
CrudTbFormDemo.defaultProps = {
  page: 1
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  initValues: state.getIn([branch, 'formValues']),
  dataTable: state.getIn([branch, 'dataTable']),
  openForm: state.getIn([branch, 'showFrm']),
  messageNotif: state.getIn([branch, 'notifMsg']),
  rowCount: state.getIn([branch, 'rowCount']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addNew: bindActionCreators(addAction, dispatch),
  closeForm: bindActionCreators(closeAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
  onChangePage: bindActionCreators(fetchAction, dispatch),
});

const CrudTbFormDemoMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTbFormDemo);

export default withStyles(styles)(CrudTbFormDemoMapped);
