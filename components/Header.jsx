import style from "../styles/Header.module.css";
import Router from "next/router";

export default function Header() {
  const refreshPage = () => {
    Router.reload(window.location.pathname);
  };

  return (
    <header className={style.header}>
      <h3 style={{ cursor: "pointer", fontWeight: 300 }} onClick={refreshPage}>
        Images<span style={{fontWeight: 600, color: '#03a9f4'}}>Searcher</span>
      </h3>
    </header>
  );
}
