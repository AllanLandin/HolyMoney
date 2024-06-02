import database from "infra/database";

async function getUserData(req, res) {
  const { email } = JSON.parse(req.body);

  const usernameResult = await database.query(
    "SELECT username FROM users WHERE email = $1;",
    [email]
  );
  const username = usernameResult.rows[0].username;

  const idUserResult = await database.query(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );
  const idUser = idUserResult.rows[0].id;

  const accountsResult = await database.query(
    "SELECT * FROM accounts WHERE id_user = $1",
    [idUser]
  );
  const accounts = accountsResult.rows;

  const transactionsResult = await database.query(
    "SELECT * FROM transactions WHERE id_user = $1;",
    [idUser]
  );
  const transactions = transactionsResult.rows;

  const response = {
    idUser,
    email,
    username,
    accounts,
    transactions,
  };
  return res.status(200).json(response);
}
export default getUserData;
