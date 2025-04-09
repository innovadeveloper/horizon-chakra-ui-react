import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from '@views/admin/default';
import NFTMarketplace from '@views/admin/marketplace';
import Profile from '@views/admin/profile';
import DataTables from '@views/admin/dataTables';
import RTL from '@views/admin/rtl';
import Redirect from '@layouts/redirect/Redirect';
import { RoutePaths } from "@variables/constants"

// Auth Imports
import SignInCentered from '@views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: RoutePaths.DASHBOARD.LAYOUT,
    path: RoutePaths.DASHBOARD.PATH,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: RoutePaths.MARKET_PLACE.LAYOUT,
    path: RoutePaths.MARKET_PLACE.PATH,
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Data Tables',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    layout: RoutePaths.DATA_TABLES.LAYOUT,
    path: RoutePaths.DATA_TABLES.PATH,
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: RoutePaths.PROFILE.LAYOUT,
    path: RoutePaths.PROFILE.PATH,
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: RoutePaths.LOGIN.LAYOUT,
    path: RoutePaths.LOGIN.PATH,
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  // },
];

export default routes;
