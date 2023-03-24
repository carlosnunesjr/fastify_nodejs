import { knex as setupKnex, Knex } from "knex";
import { env } from "./env";
console.log("database env", env);
export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === "sqlite"
      ? {
          filename: env.DATABASE_URL
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations"
  },
  debug: false
};

export const knex = setupKnex(config);
