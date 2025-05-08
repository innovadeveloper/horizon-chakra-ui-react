// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@helpers/hooks/useAuth"
// import { useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage, RoutePaths } from "@variables/constants"

export default function CallbackPage() {
  const { state, getUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoading && state.isAuthenticated) {
      const fetchUser = async () => {
        await getUser();
      };
      fetchUser();
      // navigate(RoutePaths.DASHBOARD.URI);
      navigate(RoutePaths.MY_DEVICES.URI);
    } else if (!state.isLoading && !state.isAuthenticated)
      navigate(RoutePaths.LOGIN.URI);
  }, [state, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Procesando login...</h1>
    </div>
  );
}