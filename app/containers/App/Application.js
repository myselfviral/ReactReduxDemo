import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  Parent,
  DashboardPage,
  BlankPage,
  Form,
  Table,
  Error,
  NotFound,
  CompanyDetails,
  UserDetails,
  CampaignPage,
  BarcodePage,
  TicketDetails,
  BarcodeGroupPage,
  SubscriberDetails,
  TicketGroup,
  CouponGroupDetails,
  CouponDetails,
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/app" component={DashboardPage} />
          <Route path="/app/Pages/dashboard" component={DashboardPage} />
          <Route path="/app/form" component={Form} />
          <Route path="/app/table" component={Table} />
          <Route path="/app/users-list" component={UserDetails} />
          <Route path="/app/company-list" component={CompanyDetails} />
          <Route path="/app/barcode-groups" component={BarcodeGroupPage} />
          <Route path="/app/barcode-list" component={BarcodePage} />
          <Route path="/app/ticket-list" component={TicketDetails} />
          <Route path="/app/ticket-groups" component={TicketGroup} />
          <Route path="/app/coupon-groups" component={CouponGroupDetails} />
          <Route path="/app/coupon-list" component={CouponDetails} />
          <Route path="/app/subscriber-list" component={SubscriberDetails} />
          <Route path="/app/campaign" component={CampaignPage} />
          <Route path="/app/page-list" component={Parent} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
