// src/context/TokenProvider.js
import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "@asgardeo/auth-react";
import { useAuthContext } from "@asgardeo/auth-react";

const TokenContext = createContext(null);

export function TokenProvider({ children }) {
  const { getAccessToken } = useAuthContext();
  const [tokenFn, setTokenFn] = useState(() => async () => "");

  useEffect(() => {
    setTokenFn(() => getAccessToken); // actualiza función al montar
  }, [getAccessToken]);

  // console.log("TokenProvider#useEffect.tokenFn ", tokenFn)
  return (
    <TokenContext.Provider value={tokenFn}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
