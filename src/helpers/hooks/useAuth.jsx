// src/useAuth.js
// import { useMsal } from "@azure/msal-react";
import { useAuthContext } from "@asgardeo/auth-react";

export const useAuth = () => {
  // const { instance, accounts } = useAuthContext();
  const { state, signIn, signOut, isAuthenticated, getBasicUserInfo, getDecodedIDToken, getIDToken, getAccessToken, refreshAccessToken } = useAuthContext();

  const login = () => {
    signIn()
  };

  const logout = () => {
    signOut()
  };

  return { state, login, logout, isAuthenticated, getBasicUserInfo, getAccessToken, refreshAccessToken };
};
