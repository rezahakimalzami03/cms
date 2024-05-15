/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
module.exports = ({ env }) => ({
    url: env('MY_VERCEL_URL'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS')
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET')
        }
    }
});
