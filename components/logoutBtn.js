import { signOut } from "next-auth/react";

function LogOutButton() {
  return (
    <span
      className="btn d-flex align-items-center"
      onClick={() => {
        signOut();
      }}
      href="/login"
    >
      <i className="bi bi-indent fs-4"></i>
      Sair
    </span>
  );
}

export default LogOutButton;
