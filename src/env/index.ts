import { z } from "zod";

import dotenv from "dotenv";
import path from "path";

let p = path.join(__dirname, "../../").concat(".env");

if (process.env.NODE_ENV === "test") {
  p = path.join(__dirname, "../../").concat(".env.test");
}

dotenv.config({ path: p });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_CLIENT: z.enum(["sqlite", "pg"]),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333)
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
