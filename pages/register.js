import { useState } from "react";

function Register() {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: authData.username,
        email: authData.email,
        password: authData.password,
      }),
    });
    console.log({ response });
  };

  return (
    <div>
      <form className="d-flex flex-column bg-dark text-white rounded-4 gap-3 w-50 form position-absolute top-50 start-50 translate-middle p-4">
        <div className="text-center text-uppercase border-bottom py-2">
          Cadastrar-se
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="username_register">Nome</label>
          <input
            type="text"
            id="username_register"
            placeholder="Username"
            className="rounded-1 border border-0 p-1"
            value={authData.username}
            onChange={(e) => {
              setAuthData({ ...authData, username: e.target.value });
            }}
          ></input>
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="email_register">Email</label>
          <input
            type="email"
            id="email_register"
            placeholder="Email"
            className="rounded-1 border border-0 p-1"
            value={authData.email}
            onChange={(e) => {
              setAuthData({ ...authData, email: e.target.value });
            }}
          ></input>
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="password_register">Senha</label>
          <input
            type="password"
            id="password_register"
            placeholder="Senha"
            className="rounded-1 border border-0 p-1"
            value={authData.password}
            onChange={(e) => {
              setAuthData({ ...authData, password: e.target.value });
            }}
          ></input>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-success rounded text-uppercase mt-3"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
