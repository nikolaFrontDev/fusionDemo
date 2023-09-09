import React from "react";
import styles from "./PostItem.module.css";
import { useDispatch} from "react-redux";
import { postsActions } from "./../../../redux/reducers/posts-slice";

function PostItem({ post }) {
  const MaxLengthMessage = 111;
   const dispatch = useDispatch();
 
  const handlerUsers = (event) => {
    event.preventDefault();
    let msgId = event.currentTarget.id;
    dispatch(postsActions.findPostUsers(msgId));
  };
  return (
    <tbody>
    <tr className={styles.settingsOfrow} onClick={handlerUsers} id={post.id}>
      <td>{post.fromUser}</td>
      <td className={post.message.length < 100 ? styles.nameCenter : styles.nameJustify}>
        {post.message.length > MaxLengthMessage
          ? post.message.substring(0, MaxLengthMessage) + "..."
          : post.message}
      </td>
      <td className={styles.msgusers}>Korisnici</td>
      <td>
        {new Date(post.date).toLocaleDateString("be-BY", {
          timeZone: "UTC",
        })}
      </td>
      <td>
        {(post.received && post.read) || (post.received == null && post.read)
          ? "procitano"
          : (post.received && post.read === null) ||
            (post.received == null && post.read == null)
          ? "poslato"
          : null}
      </td>
    </tr>
    </tbody>
  );
}

export default PostItem;
