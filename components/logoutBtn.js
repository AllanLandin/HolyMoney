import { signOut } from "next-auth/react";

function LogOutButton() {
  return (
    <span
      className=""
      onClick={() => {
        signOut();
      }}
      href="/login"
    >
      <i class="bi bi-box-arrow-right fs-1 cursor-pointer"></i>
    </span>
  );
}

export default LogOutButton;
