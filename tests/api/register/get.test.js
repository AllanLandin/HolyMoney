test("Get to api/register should return 200", async () => {
  const result = await fetch("http://localhost:3000/api/register");
  expect(result.status).toBe(200);
});
