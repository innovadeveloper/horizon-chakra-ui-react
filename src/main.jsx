import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { identityServerConfig } from '@variables/auth';
import { AuthProvider } from "@asgardeo/auth-react";
import { TokenProvider, useToken } from "@helpers/providers/TokenProvider";
import { setGetToken } from "@helpers/utils/mdmAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function InitToken() {
  const getToken = useToken();
  setGetToken(getToken); // inyecta la función real en api.js
  return null;
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={identityServerConfig}>
      <QueryClientProvider client={queryClient}>
        <TokenProvider>
          <InitToken />
          <App />
        </TokenProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
