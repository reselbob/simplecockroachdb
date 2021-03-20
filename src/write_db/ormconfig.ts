export const getDBConfig = () => {
    const obj = {
    name: "default",
    type: "cockroachdb",
    host: `${process.env.WRITE_DB_HOST || "localhost"}`,
    port: 26257,
    username: "admin",
    password: "admin",
    database: "simplecqrs_w",
    logging: false,
    synchronize: true,
    cli: {
        entitiesDir: "src/write_db/entity",
        migrationsDir: "src/write_db/migration",
        subscribersDir: "src/write_db/subscriber",
    },
    entities: [
        `src/write_db/entity/*{.ts,.js}`,
    ],
    migrations: [
        `src/write_db/migration*{.ts,.js}`,
    ],
    subscribers: [
        `src/write_db/subscriber/*{.ts,.js}`,
    ]
};
    return obj;
};
