import AccountCard from "components/accountCard";
import LogOutButton from "/components/logoutBtn";
import Table from "components/table";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from "../components/modal";

function Home() {
  // Utiliza "getSession" ao invés de "useSession" por que o último carrega a página 2 vezes e o primeiro resultado é sempre undefined.
  const [modalVisibility, setModalVisibility] = useState(false);
  const [typeRegister, setTypeRegister] = useState(null);

  const [userData, setUserData] = useState({
    username: "",
    accounts: [],
    transactions: [],
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        fetch("api/getUserData", {
          method: "POST",
          body: JSON.stringify({ email: session.user.email }),
        })
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
          });
      }
    });
  }, []);

  function insertEntry() {
    setTypeRegister("entrada");
    setModalVisibility(true);
  }

  function insertExit() {
    setTypeRegister("saída");
    setModalVisibility(true);
  }

  return (
    <div className="bg-dark px-4 py-2 text-white min-vh-100">
      <Modal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        typeRegister={typeRegister}
      ></Modal>
      <header className="d-flex align-items-center justify-content-between py-3 my-2">
        <div className="fs-3">HolyMoney</div>
        <div className="d-flex gap-3 align-items-center">
          <div className="fs-5">{userData.username} |</div>
          <LogOutButton />
        </div>
      </header>
      <div className="d-flex gap-4 flex-column">
        <div className="py-3 px-2 shadow">
          <p className="fs-3">Cadastrar</p>
          <div className="bg-dark gap-3 p-3 d-flex justify-content-around flex-wrap">
            <button
              onClick={insertEntry}
              className="btn btn-primary btn-animated flex-grow-1 d-flex gap-2"
            >
              <i className="bi bi-currency-dollar"></i>
              <span>Entrada</span>
            </button>
            <button
              onClick={insertExit}
              className="btn btn-danger btn-animated flex-grow-1 d-flex gap-2"
            >
              <i className="bi bi-fire"></i>
              <span>Saída</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
