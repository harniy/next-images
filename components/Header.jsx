import style from "../styles/Header.module.css";
import Router from "next/router";

export default function Header() {
  const refreshPage = () => {
    Router.reload(window.location.pathname);
  };

  return (
    <header className={style.header}>
      <h3 style={{ cursor: "pointer" }} onClick={refreshPage}>
        Images
      </h3>
    </header>
  );
}
