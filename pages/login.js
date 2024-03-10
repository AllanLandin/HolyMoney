function Login() {
  return (
    <div>
      <form className="d-flex flex-column bg-dark text-white rounded-4 gap-3 w-50 form position-absolute top-50 start-50 translate-middle p-4">
        <div className="text-center text-uppercase border-bottom py-2">
          Login
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="email_login">Email</label>
          <input
            type="email"
            id="email_login"
            placeholder="Email"
            className="rounded-1 border border-0 p-1"
          ></input>
        </div>
        <div className="d-flex flex-column gap-2">
          <label to="password_login">Senha</label>
          <input
            type="password"
            id="password_login"
            placeholder="Senha"
            className="rounded-1 border border-0 p-1"
          ></input>
        </div>
        <button className="btn btn-success rounded text-uppercase mt-3">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
