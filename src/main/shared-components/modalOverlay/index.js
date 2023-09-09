import React from "react";
import styles from "./ModalOverlay.module.css";
import PostCard from "../../posts/PostCard";
import DoubleCheckmark from "../../posts/PostDoubleCheckmark";
import Checkmark from "../../posts/PostCheckmark";
import PostButton from "../../posts/PostButton";
const ModalOverlay = (props) => {
  const { post } = props;
  return (
    <PostCard className={styles.modal}>
      <header className={styles.header}>
        <h2>
          {new Date(post.date).toLocaleDateString("en-GB", {
            timeZone: "UTC",
          })}
        </h2>
      </header>
      <div className={styles.content}>Message:</div>
      <div className={styles.content}>{post.message}</div>
      <>
        {post.members
          ? post.members.map((member) => {
              return (
                <ul>
                  <li>
                    {member.lastName ? member.name + " " + member.lastName : member.name}
                    {member.received && member.read ? (
                      <DoubleCheckmark />
                    ) : member.received == null && member.read ? (
                      <DoubleCheckmark />
                    ) : member.received && member.read == null ? (
                      <Checkmark />
                    ) : member.received == null && member.read == null ? (
                      <Checkmark />
                    ) : null}
                  </li>
                </ul>
              );
            })
          : "no members"}
      </>
      <footer className={styles.actions}>
        <PostButton onClick={props.onConfirm}>Ok</PostButton>
      </footer>
    </PostCard>
  );
};
export default ModalOverlay;
