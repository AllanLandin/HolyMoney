test("Invalid data for register should not return 200", async () => {
  const responseEmailError = await fetch(
    "http://localhost:3000/api/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        username: "Usuário válido",
        email: "emailInválido",
        password: "senhavalida123",
      }),
    }
  );
  const responseUsernameError = await fetch(
    "http://localhost:3000/api/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        username: "Usuário válido",
        email: "emailválido@gmail.com",
        password: "senhavalida123",
      }),
    }
  );
  const responsePasswordError = await fetch(
    "http://localhost:3000/api/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        username: "Usuário válido",
        email: "emailválido@gmail.com",
        password: "inv",
      }),
    }
  );

  const emailErrorData = await responseEmailError.json();
  const usernameErrorData = await responseUsernameError.json();
  const passwordErrorData = await responsePasswordError.json();

  expect(emailErrorData.status).not.toBe(200);
  expect(usernameErrorData.status).not.toBe(200);
  expect(passwordErrorData.status).not.toBe(200);
});
