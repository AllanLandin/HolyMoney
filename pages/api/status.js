import database from "../../infra/database";

async function register(req, res) {
  const [result] = await database.query("SELECT 1+1;");
  return res.json({ result });
}

export default register;
