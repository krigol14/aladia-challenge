declare const _default: () => {
    port: number;
    environment: string;
    database: {
        mongodb: {
            uri: string;
        };
    };
    microservices: {
        authentication: {
            host: string;
            port: number;
        };
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
};
export default _default;
