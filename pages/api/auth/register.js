import database from "@/infra/database";

async function POST(req, res) {
  try {
    const { email, password } = JSON.parse(req.body);
    console.log({ email, password });

    const validations = new Validations(email, password);

    for (const field in validations) {
      const validation = validations[field];
      const result = await validation.validator(validation.data);

      if (result.error) {
        console.log(validation.errorMessage);
        return res.json(validation.errorMessage);
      }
    }

    await database.query(
      `INSERT INTO ${process.env.MYSQL_DATABASE} (email, password) VALUES (?, ?);`,
      [email, password]
    );
    return res.json({ message: "success" });
  } catch (error) {
    console.debug("POST - register.js: ", error);
  }
}

class Validations {
  constructor(email, password) {
    (this.emailValid = {
      data: email,
      validator: this.validateEmail,
      errorMessage: "Email inválido",
    }),
      (this.emailAvaible = {
        data: email,
        validator: this.isEmailAvaible,
        errorMessage: "Email já em uso!",
      }),
      (this.password = {
        data: password,
        validator: this.validatePassword,
        errorMessage: "Senha inválida",
      });
  }
  validateEmail(email) {
    const emailValid = email.toString().includes("@")
      ? { message: "Email ok!" }
      : { error: "Email invalid" };
    return emailValid;
  }
  async isEmailAvaible(email) {
    return { message: "Email ok!" };
  }
  validatePassword(password) {
    const passwordIsValid = password.toString().length > 10;
    return passwordIsValid
      ? { message: "Password ok!" }
      : { error: "Password invalid" };
  }
}

export default POST;
