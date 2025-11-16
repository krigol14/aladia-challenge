export default () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    environment: process.env.NODE_ENV || 'development',
    database: {
        mongodb: {
            uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/aladia-challenge',
        },
    },
    microservices: {
        authentication: {
            host: process.env.AUTHENTICATION_SERVICE_HOST || 'localhost',
            port: parseInt(process.env.AUTHENTICATION_SERVICE_PORT || '3001', 10),
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'S3CR3T',
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
});
//# sourceMappingURL=configuration.js.map