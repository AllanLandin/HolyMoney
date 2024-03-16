"use client";

import database from "@/infra/database";
import bcrypt from "bcrypt";

async function POST(req, res) {
  try {
    const { username, email, password } = JSON.parse(req.body);

    const validations = new Validations({ username, email, password });

    for (const field in validations) {
      const validation = validations[field];
      const result = await validation.validator(validation.data);

      if (result.error) {
        console.error(validation.errorMessage);
        return res.json(validation.errorMessage);
      }
    }

    const hashedPassword = await bcrypt.hashSync(password, 12);

    await database.query(
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    return res.json({ message: "success" });
  } catch (error) {
    console.debug("POST - register.js: ", error);
  }
}

class Validations {
  constructor({ username, email, password }) {
    this.emailValid = {
      data: email,
      validator: this.validateEmail,
      errorMessage: "Email inválido",
    };
    this.usernameIsValid = {
      data: username,
      validator: this.validateUsername,
      errorMessage: "Nome de usuário inválido!",
    };
    this.password = {
      data: password,
      validator: this.validatePassword,
      errorMessage: "Senha inválida",
    };
    this.emailAvaible = {
      data: email,
      validator: this.isEmailAvaible,
      errorMessage: "Email já em uso!",
    };
  }
  validateEmail(email) {
    const emailValid = email.toString().includes("@")
      ? { message: "Email ok!" }
      : { error: "Email invalid" };
    return emailValid;
  }
  async isEmailAvaible(email) {
    const result = await database.query(
      "SELECT email from user WHERE email = ?",
      email
    );

    const isEmailInUse = result.length > 0;

    return isEmailInUse
      ? { error: "Email is already registered" }
      : { message: "Email ok!" };
  }
  validateUsername(username) {
    return username
      ? { message: "Username ok" }
      : { error: "Username is null" };
  }
  validatePassword(password) {
    const passwordIsValid = password.toString().length > 10;
    return passwordIsValid
      ? { message: "Password ok!" }
      : { error: "Password invalid" };
  }
}

export default POST;
