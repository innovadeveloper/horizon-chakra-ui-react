import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Importamos Router
import AuthLayout from '@layouts/auth';
import AdminLayout from '@layouts/admin';
import RTLLayout from '@layouts/rtl';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import initialTheme from './theme/theme'; // { themeGreen }
import { useState } from 'react';
import ProtectedRoute from "@/helpers/ProtectedRoute";
import { LocalStorage, RoutePaths } from "@variables/constants"



export default function Main() {
  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    // Envolvemos la app con BrowserRouter
    <Router>
      <ChakraProvider theme={currentTheme}>
        <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route
            path="admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
              </ProtectedRoute>
              // <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
          <Route
            path="rtl/*"
            element={
              <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
          {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
          <Route path="/" element={<Navigate to="/auth/sign-in/default" replace />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}
