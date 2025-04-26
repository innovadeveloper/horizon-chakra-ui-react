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
import Devices from '@views/admin/devices';
import Policies from '@views/admin/policies';
import RTL from '@views/admin/rtl';
import Redirect from '@layouts/redirect/Redirect';
import { RoutePaths } from "@variables/constants"
import AuthLayout from '@layouts/auth';
import CallbackPage from '@views/auth/callback';

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
    layout: RoutePaths.MY_DEVICES.LAYOUT,
    path: RoutePaths.MY_DEVICES.PATH,
    icon: (
      <Icon
        as={MdPhoneAndroid}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Devices />,
    secondary: true,
  },
  {
    name: 'Mis Políticas',
    icon: <Icon as={MdLocalPolice} width="20px" height="20px" color="inherit" />,
    layout: RoutePaths.MY_POLICIES.LAYOUT,
    path: RoutePaths.MY_POLICIES.PATH,
    component: <Policies />,
  },
  // {
  //   name: 'Perfiles de usuario',
  //   layout: RoutePaths.PROFILE.LAYOUT,
  //   path: RoutePaths.PROFILE.PATH,
  //   icon: <Icon as={FaUsersCog} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  {
    name: 'Auth',
    layout: RoutePaths.LOGIN.LAYOUT,
    path: RoutePaths.LOGIN.PATH,
    icon: <Icon as={MdSms} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'AuthCallback',
    layout: RoutePaths.AUTH_CALLBACK.LAYOUT,
    path: RoutePaths.AUTH_CALLBACK.PATH,
    icon: <Icon as={MdSms} width="20px" height="20px" color="inherit" />,
    component: <CallbackPage />,
  },
];

export default routes;
