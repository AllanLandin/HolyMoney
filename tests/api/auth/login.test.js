test("Login with invalid data should return 400", async () => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "teste",
      email: "teste",
      password: "teste",
    }),
  });

  expect(response.status).toBe(400);
});
