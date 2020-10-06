module.exports = [
/*   {
    key: 'dashbord',
    name: 'Dashbord',
    link: '/app/Pages/Dashboard',
    icon: 'ios-home-outline',
  }, */
  {
    key:'user',
    name: 'User',
    icon:'ios-contacts-outline',
    child:[
      {
        key: 'userlist',
        name: 'Users List',
        link: '/app/users-list',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'company',
    name:"Company",
    icon:'ios-flower-outline',
    child:[
      {
        key: 'companylist',
        name: 'Company List',
        link: '/app/company-list',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'barcode',
    name:"Barcode",
    icon:'ios-barcode-outline',
    child:[
      {
        key: 'barcodegroup',
        name: 'Barcode Group',
        link: '/app/barcode-groups',
        icon: 'ios-contacts'
      },
      {
        key: 'barcode',
        name: 'Barcode',
        link: '/app/barcode-list',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'campaign',
    name:'Campaign',
    icon:'ios-star-half',
    child:[
      {
        key: 'campaignlist',
        name: 'Campaign List',
        link: '/app/campaign',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'ticket',
    name:"Ticket",
    icon:'ios-card-outline',
    child:[
      {
        key: 'ticketlist',
        name: 'Ticket List',
        link: '/app/ticket-list',
        icon: 'ios-contacts'
      },
      {
        key: 'ticketgrouplist',
        name: 'Ticket Group List',
        link: '/app/ticket-groups',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'subscriber',
    name:"Subscriber",
    icon:'ios-people-outline',
    child:[
      {
        key: 'subscriberlist',
        name: 'Subscriber List',
        link: '/app/subscriber-list',
        icon: 'ios-contacts'
      }
    ]
  },
  {
    key:'coupon_groups',
    name:'Coupon',
    icon:'ios-pricetag-outline',
    child:[
      {
        key: 'coupon_groups_list',
        name: 'Coupon Groups List',
        link: '/app/coupon-groups',
        icon: 'ios-contacts'
      },
      {
        key: 'coupon_list',
        name: 'Coupon List',
        link: '/app/coupon-list',
        icon: 'ios-contacts'
      }
    ]
  }
];
