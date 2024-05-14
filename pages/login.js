"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

function Login() {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/home");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: authData.email,
      password: authData.password,
      redirect: false,
    });
    if (!response?.error) {
      router.push("/home");
      toast.success("Seja bem vindo!");
    }
    if (response?.error) {
      switch (response.error) {
        case "CredentialsSignin":
          toast.error("Email e/ou senha incorreto(s)!");
      }
    }
  };

  return (
    <div className="d-md-flex">
      <form className="d-flex flex-column p-3 justify-content-around vh-100 mx-md-5">
        <div className="fs-2">Login</div>
        <div className="d-flex flex-column gap-2">
          <label to="email_login">Email</label>
          <input
            name="email"
            type="email"
            id="email_login"
            placeholder="Escreva aqui o seu email"
            className="border-bottom border-0 border-2 border-dark p-1"
            value={authData.email}
            onChange={(e) => {
              setAuthData({ ...authData, email: e.target.value });
            }}
          ></input>
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="password_login">Senha</label>
          <input
            name="password"
            type="password"
            id="password_login"
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
          Entrar
        </button>
        <div className="text-center">
          <small>
            Não tem uma conta ainda?{" "}
            <Link
              href="/register"
              className="text-decoration-none text-warning"
            >
              Clique aqui
            </Link>{" "}
            para registrar-se.
          </small>
        </div>
      </form>
      <div className="d-none d-md-flex flex-grow-1 vh-100">
        <img
          src="background-login.jpg"
          className="h-100 w-100 object-fit-cover"
        ></img>
        <div className="position-absolute bottom-50 px-5">
          <p className="text-white fs-1">
            Novamente no <span className="text-darker fw-bold">HolyMoney</span>?
          </p>
          <p className="fst-italic text-white">
            Faça o login para entrar no aplicativo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
