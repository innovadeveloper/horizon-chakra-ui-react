import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdSms,
  MdLocalPolice,
  MdPhoneAndroid,
  MdDashboard
} from 'react-icons/md';
import { FaUsersCog } from "react-icons/fa";

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
    name: 'Dashboard',
    layout: RoutePaths.DASHBOARD.LAYOUT,
    path: RoutePaths.DASHBOARD.PATH,
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Mis Dispositivos',
    layout: RoutePaths.MARKET_PLACE.LAYOUT,
    path: RoutePaths.MARKET_PLACE.PATH,
    icon: (
      <Icon
        as={MdPhoneAndroid}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Mis Políticas',
    icon: <Icon as={MdLocalPolice} width="20px" height="20px" color="inherit" />,
    layout: RoutePaths.DATA_TABLES.LAYOUT,
    path: RoutePaths.DATA_TABLES.PATH,
    component: <DataTables />,
  },
  {
    name: 'Perfiles de usuario',
    layout: RoutePaths.PROFILE.LAYOUT,
    path: RoutePaths.PROFILE.PATH,
    icon: <Icon as={FaUsersCog} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Mensajería',
    layout: RoutePaths.LOGIN.LAYOUT,
    path: RoutePaths.LOGIN.PATH,
    icon: <Icon as={MdSms} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;
