/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
// eslint-disable-next-line no-unused-vars
module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
            ssl: {
                rejectUnauthorized: false
            },
        },
        debug: false,
    },
});