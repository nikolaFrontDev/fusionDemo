import React from "react";
import { IoCheckmarkDoneSharp, IoCheckmarkOutline } from "react-icons/io5";
import styles from "../posts/Post.module.css";

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
                        <IoCheckmarkDoneSharp
                          style={{
                            color: "green",
                            fontSize: "25px",
                            marginBottom: "-1%",
                          }}
                        />
                      ) : user.received == null && user.read ? (
                        <IoCheckmarkDoneSharp
                          style={{
                            color: "green",
                            fontSize: "25px",
                            marginBottom: "-1%",
                          }}
                        />
                      ) : user.received && user.read == null ? (
                        <IoCheckmarkOutline
                          style={{
                            color: "#282828",
                            fontSize: "25px",
                            marginBottom: "-1%",
                          }}
                        />
                      ) : user.received == null && user.read == null ? (
                        <IoCheckmarkOutline
                          style={{
                            color: "#282828",
                            fontSize: "25px",
                            marginBottom: "-1%",
                          }}
                        />
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
