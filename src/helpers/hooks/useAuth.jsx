// src/useAuth.js
// import { useMsal } from "@azure/msal-react";
import { useAuthContext } from "@asgardeo/auth-react";
import { useState } from "react";

// https://is.docs.wso2.com/en/latest/get-started/try-your-own-app/react/
export const useAuth = () => {
  // const { instance, accounts } = useAuthContext();
  const { state, signIn, signOut, isAuthenticated, getBasicUserInfo, getDecodedIDToken, getIDToken, getAccessToken, refreshAccessToken } = useAuthContext();
  const [userInfo, setUserInfo] = useState(null);

  const login = () => {
    signIn()
  };

  const logout = () => {
    signOut()
    setUserInfo(null)
  };

  const getUser = async () => {
    if (userInfo)
      return userInfo;
    
    const info = await getBasicUserInfo();
    setUserInfo(info);
    // console.log("user info => " + JSON.stringify(info))
    return info;
  };

  const getAccessTokenInvoke  = async () => {
    if (isAuthenticated) {
      const decoded = await getDecodedIDToken();
      const now = Math.floor(Date.now() / 1000); // tiempo actual en segundos
      const isExpired = decoded?.exp && decoded.exp < now;
      // console.log("decoded " , decoded);
      if (isExpired) {
        console.warn("La sesión ha expirado. Cerrando sesión...");
        signOut();
        return null;
      }

      try {
        return await getAccessToken();;
      } catch (error) {
        console.error("Error obteniendo el access token", error);
      }
    }
    return null;
  };

  return {
    state, 
    login, 
    logout, 
    isAuthenticated, 
    getBasicUserInfo, 
    getAccessTokenInvoke, 
    refreshAccessToken,
    getUser,
    userInfo
  };
};
