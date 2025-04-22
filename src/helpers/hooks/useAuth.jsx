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

  return {
    state, 
    login, 
    logout, 
    isAuthenticated, 
    getBasicUserInfo, 
    getAccessToken, 
    refreshAccessToken,
    getUser,
    userInfo
  };
};
