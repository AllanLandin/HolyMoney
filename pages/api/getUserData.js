async function getUserData(req, res) {
  const { email } = JSON.parse(req.body);
  console.log(email);
  return res.status(200).json({ email: email });
}

export default getUserData;
