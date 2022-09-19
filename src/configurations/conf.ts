import * as dotenv from "dotenv";

dotenv.config();

export const EriConfig = {
  database: {
    host: (process.env.DB_HOST as string) || "us-cdbr-east-06.cleardb.net",
    database: (process.env.DB_NAME as string) || "heroku_e78e2d2b6869c46",
    user: (process.env.DB_USER as string) || "b3d857e0a1e884",
    password: (process.env.DB_PASSWORD as string) || "7cd21039",
    port: "3306",
    charset: "utf8mb4",
  }
};
