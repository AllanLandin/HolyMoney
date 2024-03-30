import Link from "next/link";

function Index() {
  return (
    <div className="bg-dark vh-100 background-image-darker">
      <div className="d-flex flex-column justify-content-center h-100 align-items-center text-center gap-3">
        <h1 className="text-white fs-1">
          Seja Bem Vindo ao{" "}
          <span className="fw-bold text-primary">HolyMoney</span>!
        </h1>
        <div className="d-flex gap-3">
          <Link
            href="/register"
            className="btn btn-dark btn-animated px-4 py-3"
          >
            Registrar-se
          </Link>
          <Link href="/login" className="btn btn-dark btn-animated px-4 py-3">
            Fazer Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
