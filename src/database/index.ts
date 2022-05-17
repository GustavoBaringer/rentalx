import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ["./src/database/migrations/*.ts"],
})

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized");
    })
    .catch(error => {
        console.log('Error during Data Source initialization', error);
    });