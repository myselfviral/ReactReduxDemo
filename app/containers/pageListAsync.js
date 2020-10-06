import Loadable from 'react-loadable';
import Loading from 'dan-components/Loading';

export const HomePage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});

export const DashboardPage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const LoginDedicated = Loadable({
  loader: () => import('./Pages/Standalone/LoginDedicated'),
  loading: Loading,
});
export const Register = Loadable({
  loader: () => import('./Pages/Users/Register'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});

export const UserDetails = Loadable({
  loader: () => import('./Tables/EditableCell'),
  loading: Loading,
});

export const CompanyDetails = Loadable({
  loader: () => import('./Tables/CompanyCell'),
  loading: Loading,
});

export const TicketDetails = Loadable({
  loader: () => import('./Tables/TicketCell'),
  loading: Loading,
});
export const TicketGroup = Loadable({
  loader: () => import('./Tables/TicketGroup'),
  loading: Loading,
});

export const BarcodeGroupPage = Loadable({
  loader: () => import('./Tables/BarcodeGroupPage'),
  loading: Loading,
});


export const BarcodePage = Loadable({
  loader: () => import('./Tables/BarcodePage'),
  loading: Loading,
});

export const SubscriberDetails = Loadable({
  loader: () => import('./Tables/SubscribersCell'),
  loading: Loading,
});

export const CouponGroupDetails = Loadable({
  loader: () => import('./Tables/CouponGroup'),
  loading: Loading,
});

export const CouponDetails = Loadable({
  loader: () => import('./Tables/Coupon'),
  loading: Loading,
});

export const CampaignPage = Loadable({
  loader: () => import('./Tables/CampaignPage'),
  loading: Loading,
});