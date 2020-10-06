import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import { Barcode } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class BarcodePage extends Component {
  render() {
    const title = brand.name + ' - Barcode';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock whiteBg icon="ios-list-box-outline" title="Barcode" desc="">
          <div className={classes.root}>
            <Barcode />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

BarcodePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarcodePage);
