import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { identityServerConfig } from '@variables/auth';
import { AuthProvider } from "@asgardeo/auth-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={identityServerConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
