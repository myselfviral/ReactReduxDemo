import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import Axios from 'axios';
import Qs from 'querystring';
import { API_URL, CONFIG_HEADER } from '../../../config/applicationConstatnt';

class Login extends React.Component {
  state = {
    valueForm: []
  }
  submitForm(values) {
    console.log('valueForm', valueForm);
    const { valueForm } = this.state;
    setTimeout(() => {
      this.setState({ valueForm: values });
      let requestBody = JSON.stringify(values, null, 2);
      let login_data = JSON.parse(requestBody);
      let requestBodydata = {
        email: login_data.email,
        password: login_data.password,
      }
      Axios.post(API_URL + '/authenticate', Qs.stringify(requestBodydata), CONFIG_HEADER)
        .then((result) => {
          if (result.data.error == 0) {
            let token = {
              request_token: result.data.request_token,
              company_id: '1',
            };

            Axios.post(API_URL + '/authorize', Qs.stringify(token), CONFIG_HEADER)
              .then((response) => {
                let user_name = result.data.admin.a_name + ' ' + result.data.admin.a_surname;
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('user_name_active', user_name);
                window.location.href = '/app';
              })
              .catch((err) => {
                if (err.data.error == "1") {
                  let error_msg = err.data.message;
                }
              })
          }
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ errorMessage: error.response.data.message });
          }
        });
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <LoginForm onSubmit={(values) => this.submitForm(values)} message={this.state.errorMessage} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
