const RoutePaths = Object.freeze({
    LOGIN: {
        LAYOUT : "/auth",
        PATH : "/sign-in",
        URI : "/auth/sign-in"
    },
    DASHBOARD: {
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
});

const LocalStorage = Object.freeze({
    ACCESS_TOKEN_PROPERTY: "access_token"
});

export { RoutePaths, LocalStorage };