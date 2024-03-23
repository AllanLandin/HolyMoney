test("Invalid data request should return an error", async () => {
  const response = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      username: "teste",
      email: "teste",
      password: "teste123131",
    }),
  });

  expect(response.status).toBe(400);
  expect(response.error).toBeFalsy();
});
