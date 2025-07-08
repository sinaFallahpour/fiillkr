// Configuration file for fiillkr project

const config = {
    app: {
        name: 'Fiillkr',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    },
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    },
    database: {
        url: process.env.DATABASE_URL || 'mongodb://localhost:27017/fiillkr'
    },
    logging: {
        level: process.env.LOG_LEVEL || 'info'
    }
};

module.exports = config;
