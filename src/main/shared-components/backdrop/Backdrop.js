import React from "react";
import style from "./Backdrop.module.css";
function Backdrop({ onConfirm }) {
  return <div className={style.backdrop} onClick={onConfirm} />;
}

export default Backdrop;
