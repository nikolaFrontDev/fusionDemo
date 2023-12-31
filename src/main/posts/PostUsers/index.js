import React from "react";
import styles from "./PostUsers.module.css";
import DoubleCheckmark from "./DoubleCheckmark";
import Checkmark from "./Checkmark";

function PostUsers({ users }) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={`${visible ? styles.lightbox : styles["hide-lightbox"]}`}>
      <div className={styles.boxpostusers}>
        <form action="#" method="post">
          <div>Users:</div>

          {users
            ? users.map((user) => {
                return (
                  <ul>
                    <li>
                      {user.name}
                      {user.received && user.read ? (
                        <DoubleCheckmark />
                      ) : user.received == null && user.read ? (
                        <DoubleCheckmark />
                      ) : user.received && user.read == null ? (
                        <Checkmark />
                      ) : user.received == null && user.read == null ? (
                        <Checkmark />
                      ) : null}
                    </li>
                  </ul>
                );
              })
            : "no users"}
          <div
            className={styles.closewindow}
            onClick={() => setVisible(!visible)}
          >
            X
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostUsers;
