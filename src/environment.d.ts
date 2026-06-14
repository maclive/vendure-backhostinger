export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_ENV: string;
            PORT: string;
            COOKIE_SECRET: string;
            SUPERADMIN_USERNAME: string;
            SUPERADMIN_PASSWORD: string;
            DATABASE_URL?: string;
            ASSET_URL_PREFIX?: string;
            STOREFRONT_URL?: string;
            FROM_EMAIL?: string;
        }
    }
}
