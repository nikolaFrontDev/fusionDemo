import React from "react";
import styles from "../posts/Post.module.css";

function PostHeader({children}) {
  return (
    <div className={styles.postcontent}>
      <div className={styles.container}>
        <div className={styles.borderformsg}>
          <table className={styles.neumorphic}>
            <thead>
              <tr>
                <th>Senders</th>
                <th>Post name</th>
                <th>Recipients</th>
                <th>Post date </th>
                <th>Post status</th>
              </tr>
            </thead>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
