import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: process.env.NODE_ENV === "development" ? false : true,
});

async function query(queryObj, ...rest) {
  try {
    const result = await pool.query(queryObj, ...rest);
    return result;
  } catch (error) {
    console.debug("Query Function Error:", error);
  }
}

export default { query };
