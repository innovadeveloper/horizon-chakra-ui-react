// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: "_4zrHrSTi9FpZe64ejSEHAkyELYa",             // El ID de la app registrada en WSO2IS
    // authority: "https://wso2is-service-7.abexa.pe/oauth2/token/.well-known/openid-configuration",   // WSO2 authorization endpoint
    // authority: "https://wso2is-service-7.abexa.pe/oauth2/authorize",   // WSO2 authorization endpoint
    authority: "https://wso2is-service-7.abexa.pe/oauth2/authorize", // base normal
    authorityMetadata: "https://wso2is-service-7.abexa.pe/oauth2/token/.well-known/openid-configuration", // <- aquí
    redirectUri: "http://localhost:5173/auth/callback",         // Callback después de login
    postLogoutRedirectUri: "http://localhost:5173/",
    knownAuthorities: ["https://wso2is-service-7.abexa.pe"],  // Permite tu servidor como autoridad confiable
  },
  cache: {
    cacheLocation: "localStorage",  // o sessionStorage
    storeAuthStateInCookie: false,
  }
};

export const identityServerConfig = {
  signInRedirectURL: "http://localhost:5173/auth/callback",
  signOutRedirectURL: "http://localhost:5173/auth/callback",
  clientID: "_4zrHrSTi9FpZe64ejSEHAkyELYa",
  baseUrl: "https://wso2is-service-7.abexa.pe",
  scope: ["openid", "email", "profile", "mobiledevicemanagement.write",  "mobiledevicemanagement.read"] // 
};

// https://wso2is-service-7.abexa.pe/oauth2/token/.well-known/openid-configuration
// /v2.0/.well-known/openid-configuration
