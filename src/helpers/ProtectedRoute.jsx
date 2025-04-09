// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import Redirect from "@layouts/redirect/Redirect";
import {jwtDecode} from "jwt-decode";
import { LocalStorage, RoutePaths } from "@variables/constants"
/**
 * valida si existe una sesión activa o no.
 * En caso de no haber una sesión activa, entonces
 * se retornará al login
 * @param {*} param0 
 * @returns 
 */
export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem(LocalStorage.ACCESS_TOKEN_PROPERTY);
    const delay = 12000;

    if (token) {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        if (decoded.exp < now) {
            localStorage.removeItem(LocalStorage.ACCESS_TOKEN_PROPERTY);
            return <Redirect message="Tu sesión" delay={delay} path={RoutePaths.LOGIN.URI} />;
        }
    } else
        return <Redirect message="No tienes una sesión activa" delay={delay} path={RoutePaths.LOGIN.URI} />;
    return children;
}
