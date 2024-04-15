import AccountCard from "components/accountCard";
import LogOutButton from "/components/logoutBtn";
import Table from "components/table";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();
  if (!session) {
    return <div>Você não está logado!</div>;
  }
  const { user } = session;
  console.log(session);

  return (
    <div className="bg-dark px-4 py-2 text-white min-vh-100">
      <header className="d-flex align-items-center justify-content-between py-3 my-2">
        <div className="fs-3">HolyMoney</div>
        <div>
          <LogOutButton />
        </div>
      </header>
      <div className="d-flex gap-4 flex-column">
        <div className="py-3 px-2 shadow">
          <p className="fs-3">Cadastrar</p>
          <div className="bg-dark gap-3 p-3 d-flex justify-content-around flex-wrap">
            <button className="btn btn-primary btn-animated flex-grow-1 d-flex gap-2">
              <i className="bi bi-currency-dollar"></i>
              <span>Entrada</span>
            </button>
            <button className="btn btn-danger btn-animated flex-grow-1 d-flex gap-2">
              <i className="bi bi-fire"></i>
              <span>Saída</span>
            </button>
            <button className="btn btn-warning btn-animated flex-grow-1 d-flex gap-2">
              <i className="bi bi-wallet2"></i>
              <span>Conta</span>
            </button>
          </div>
        </div>
        <div className="py-3 px-2 shadow ">
          <p className="fs-3">Contas</p>
          <div className="d-flex w-100 p-3 gap-2 overflow-scroll bg-primary">
            <AccountCard></AccountCard>
          </div>
        </div>
        <div className="py-3 px-2 shadow ">
          <p className="fs-3">Transações</p>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
