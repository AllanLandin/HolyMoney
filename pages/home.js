import Link from "next/link";
import Card from "@/components/card";
import LogOutButton from "@/components/logoutBtn";

function Home() {
  return (
    <div className="vw-100 vh-100 text-light d-flex flex-column">
      <header className="bg-light text-dark d-flex justify-content-between align-items-center py-2 px-4">
        <div className="d-flex gap-2 align-items-center ">
          <img className="small-img" src="/logo1.jpg"></img>
          <nav>
            <Link
              href="#"
              className="text-decoration-none text-dark border-success link-hover"
            >
              Página inicial
            </Link>
          </nav>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex gap-2 align-items-center">
            <btn className="btn btn-success">+ Entrada</btn>
            <btn className="btn btn-danger">+ Saída</btn>
          </div>
          <LogOutButton />
        </div>
      </header>
      <main className="py-2 px-4 bg-light d-flex gap-2 flex-grow-1">
        <div className="text-dark bg-success flex-grow-1 p-2 rounded d-flex flex-column">
          <div className="d-flex gap-2 flex-column flex-md-row">
            <Card
              image={<i className="bi bi-currency-dollar fs-2 p-1"></i>}
              desc="Saldo"
              balance={123}
            ></Card>
            <Card
              image={
                <i className="bi bi-graph-up-arrow fs-2 p-1 text-success"></i>
              }
              desc="Ganhos"
              balance={123}
            ></Card>
            <Card
              image={
                <i className="bi bi-graph-down-arrow fs-2 p-1 text-danger"></i>
              }
              desc="Despesas"
              balance={123}
            ></Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
