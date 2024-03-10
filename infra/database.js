import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
});

async function query(queryObj) {
  try {
    const [result] = await pool.query(queryObj);
    return result;
  } catch (error) {
    console.debug("Query Function", error);
  }
}

export default { query };
