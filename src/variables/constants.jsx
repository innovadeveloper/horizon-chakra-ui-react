const RoutePaths = Object.freeze({
    // AUTH
    LOGIN: {
        LAYOUT : "/auth",
        PATH : "/sign-in",
        URI : "/auth/sign-in"
    },
    AUTH_CALLBACK: {
        LAYOUT : "/auth",
        PATH : "/callback",
        URI : "/auth/callback"
    },
    // ADMIN
    DASHBOARD: {
        // LAYOUT : "/admin",
        // PATH : "/default",
        // URI : "/admin/default"
        LAYOUT : "/admin",
        PATH : "/default",
        URI : "/admin/default"
    },
    MARKET_PLACE: {
        LAYOUT : "/admin",
        PATH : "/nft-marketplace",
        URI : "/admin/nft-marketplace"
    },
    DATA_TABLES: {
        LAYOUT : "/admin",
        PATH : "/data-tables",
        URI : "/admin/data-tables"
    },
    PROFILE: {
        LAYOUT : "/admin",
        PATH : "/profile",
        URI : "/admin/profile"
    },
    MY_DEVICES: {
        LAYOUT : "/admin",
        PATH : "/my-devices",
        URI : "/admin/my-devices"
    },
    MY_POLICIES: {
        LAYOUT : "/admin",
        PATH : "/my-policies",
        URI : "/admin/my-policies"
    },
});

const LocalStorage = Object.freeze({
    ACCESS_TOKEN_PROPERTY: "access_token"
});

export { RoutePaths, LocalStorage };