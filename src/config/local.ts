export const config = {
    server: {
        port: 3000,

    },
    db: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test",
        entities: ["src/entity/*.js"],
        logging: true,
        synchronize: true,
    }
};
