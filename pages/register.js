import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Register() {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

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
    const responseData = await response.json();

    if (responseData?.error) {
      toast.error(responseData.error);
    }
    if (!responseData?.error) {
      router.push("/login");
      toast.success(responseData.message);
    }
  };

  return (
    <div className="d-md-flex">
      <div className="d-none d-md-flex flex-grow-1 vh-100 bg-dark">
        <img
          src="background-register.jpg"
          className="h-100 object-fit-cover w-100"
        ></img>
        <div className="position-absolute bottom-50 px-2">
          <p className="text-white fs-1">Novo aqui no FinanceC?</p>
          <p className="text-white fst-italic">
            Cadastre-se e comece a utiizar o app!
          </p>
        </div>
      </div>
      <form className="d-flex vh-100 flex-column justify-content-around mx-md-5 p-3 gap-3">
        <div className="fs-2">Cadastrar-se</div>
        <div className="d-flex flex-column gap-2">
          <label to="username_register">Username</label>
          <input
            type="text"
            id="username_register"
            placeholder="Escreva aqui o seu username"
            className="border-bottom border-0 border-2 border-dark p-1"
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
            placeholder="Escreva aqui o seu email"
            className="border-bottom border-0 border-2 border-dark p-1"
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
            placeholder="Escreva aqui a sua senha"
            className="border-bottom border-0 border-2 border-dark p-1"
            value={authData.password}
            onChange={(e) => {
              setAuthData({ ...authData, password: e.target.value });
            }}
          ></input>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-dark rounded text-uppercase mt-3 btn-animated"
        >
          Cadastrar
        </button>
        <div>
          <small>
            Já tem uma conta?{" "}
            <Link href="/login" className="text-decoration-none text-warning">
              Clique aqui
            </Link>{" "}
            para fazer login.
          </small>
        </div>
      </form>
    </div>
  );
}

export default Register;
