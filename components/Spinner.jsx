import style from "../styles/Spinner.module.css";

export default function Spinner() {
  return (
    <div className={style.spinner_block}>
      <div className={style["sk-chase"]}>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
      </div>

      <p>Please wait...</p>
    </div>
  );
}
