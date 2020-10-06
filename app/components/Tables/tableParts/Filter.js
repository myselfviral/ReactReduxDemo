import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';


const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(-2),
    minWidth: 220,
    height: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
});

class Filter extends React.Component {
  state = {
    id: '',
    value: 'hai',
  };


  render() {
    const {
      classes,
      branch,
      filterItems,
      filterFunc,
      filterID,
      filterValue,
      items
    } = this.props;
    
    const { id, value } = this.state;
    let menu;
    const eventFilter = event => {
      this.setState({ [event.target.name]: event.target.value });
      filterFunc(event.target.value, branch, items);
    };
    const getBarcodeGroup = dataArray => dataArray.map(item => (
      <MenuItem value={item.get(filterID)} key={item.get(filterID)}>{item.get(filterValue)}</MenuItem>
    ));
    if (filterItems === undefined) {
      menu = <MenuItem value="Arimex">Arimex</MenuItem>;
    } else {
      menu = getBarcodeGroup(filterItems);
   
    }
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="Group-label">Group</InputLabel>
          <Select
            value={id}
            onChange={eventFilter}
            inputProps={{
              name: 'id',
              id: 'Group-label',
            }}
          >
            {menu}
          </Select>
        </FormControl>
      </div>

    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  filterItems: PropTypes.array.isRequired,
  filterID: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  filterFunc: PropTypes.func.isRequired,
  items: PropTypes.array,
};

Filter.defaultProps = {
  items: []
};



export default withWidth()(Filter);
