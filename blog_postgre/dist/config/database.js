"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'blog_cms'),
            user: env('DATABASE_USERNAME', 'blog_dba'),
            password: env('DATABASE_PASSWORD', 'GUsM$u6jX!ngk'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
