import {type ClientConfig} from 'pg';
export const dbConfig:ClientConfig = {
    user: process.env.USERNAME_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB || "5432"),
}