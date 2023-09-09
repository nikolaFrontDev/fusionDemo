import React from "react";
import styles from "./LayoutBox.module.css";

export default function LayoutBox({ children }) {
  return (
    <div className={styles.box}>
      <div className={styles.boxwidth}>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}
