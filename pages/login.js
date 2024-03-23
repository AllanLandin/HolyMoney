"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Login() {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: authData.email,
      password: authData.password,
      redirect: false,
    });
    console.log(response);
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
    <div>
      <form className="d-flex flex-column bg-dark text-white rounded-4 gap-3 w-50 form position-absolute top-50 start-50 translate-middle p-4">
        <div className="text-center text-uppercase border-bottom py-2">
          Login
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="email_login">Email</label>
          <input
            name="email"
            type="email"
            id="email_login"
            placeholder="Email"
            className="rounded-1 border border-0 p-1"
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
