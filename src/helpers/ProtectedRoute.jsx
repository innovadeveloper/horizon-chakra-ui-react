// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import Redirect from "@layouts/redirect/Redirect";
import { jwtDecode } from "jwt-decode";
import { LocalStorage, RoutePaths } from "@variables/constants"
import { useAuth } from "@helpers/hooks/useAuth"

/**
 * valida si existe una sesión activa o no.
 * En caso de no haber una sesión activa, entonces
 * se retornará al login
 * @param {*} param0 
 * @returns 
 */
export default function ProtectedRoute({ children }) {
    const { state } = useAuth();
    const delay = 2000;
    if (!state.isAuthenticated)
        return <Redirect message="No tienes una sesión activa" delay={delay} path={RoutePaths.LOGIN.URI} />;
    return children;
}
