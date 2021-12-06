import { useRef, useEffect } from "react";
import style from "../styles/Input.module.css";

export default function Input({ imageName, setImageName, isSearch }) {
  const inputRef = useRef(null);


  useEffect(() => {
    if (isSearch) {
      const title = inputRef.current.children[0];
      title.style += "font-size: 2px; opacity: 0";
        setTimeout(() => {
          inputRef.current.style = "margin-top: 20px";
        }, 400);
    }
  }, [isSearch]);


  return (
    <div className={style.input__block} ref={inputRef}>
      <p className={style.input__title}>Search images</p>
      <input className={style.input} type="text" placeholder="Images" onChange={e => setImageName(e.target.value)} />
    </div>
  );
}
