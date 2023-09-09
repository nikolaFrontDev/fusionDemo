import styles from "./Layout.module.css";

const LayoutForm = ({ children }) => {
  return (
    <div className={styles.containerlog}>
      <div className={styles.border}>{children}</div>
    </div>
  );
};

export default LayoutForm;
