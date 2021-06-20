import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  max: 20,
});

export default pool;
