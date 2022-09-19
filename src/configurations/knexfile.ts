import { EriConfig } from "./conf";
import * as dotenv from "dotenv"

dotenv.config()

interface IKnexConfig {
  [key: string]: object;
}
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const config: IKnexConfig = {
  development: {
    client: "postgresql",
    connection: {
      host: (process.env.DB_HOST as string) || "ec2-3-214-2-141.compute-1.amazonaws.com",
      database: (process.env.DB_NAME as string) || "d7he5ieaumav8a",
      user: (process.env.DB_USER as string) || "bobxnlqqryhzsu",
      password: (process.env.DB_PASSWORD as string) || "f25b74e1f702398bf068f440a56b38d0d3bef006bf8605c7ddcaf57fac966909",
      port: "5432",
      charset: "utf8mb4",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "../database/migrations",
    },
    seeds: {
      directory: "../database/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
