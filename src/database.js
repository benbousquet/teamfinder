import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
