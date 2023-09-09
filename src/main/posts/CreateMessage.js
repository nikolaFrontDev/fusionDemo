import React, { useEffect, useState } from "react";
import FusionLogo from "./../../img/green-power.png";

import styles from "./CreateMessage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../main/store/post-slice";
import { postsActions } from "../../main/store/posts-slice";
import Button from "../shared-components/button/Button";
import Input from "../shared-components/input/Input";
import Header from "../shared-components/header/Header";
import FormList from "../shared-components/form/FormList";
import CheckedListUsers from "../shared-components/checkedUsers/CheckedListUsers";

export default function CreateMessage() {
  const [query, setQuery] = useState("");

  const groups = useSelector((state) => state.groups.groups);
  const users = useSelector((state) => state.users.users);
  const checkMembers = useSelector((state) => state.post.checkMembers);
  const message = useSelector((state) => state.post.message);

  const dispatch = useDispatch();

  const readMsgHandler = (e) => {
    dispatch(postActions.editMessage(e.target.value));
  };

  useEffect(() => {
    let members = [...users, ...groups];
    dispatch(postActions.setMembers(members));
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    if (checkMembers.length > 0 && message != "") {
      const currentDate = Date.now();

      const formData = {
        id: Math.round(Math.random() * 10000),
        members: checkMembers,
        message,
        date: new Date(currentDate).toLocaleDateString("af", {
          timeZone: "UTC",
        }),
        fromUser: "admin",
      };
      dispatch(postsActions.addPosts(formData));
      dispatch(postActions.setCheckMembers());
      dispatch(postActions.setResetMessage());
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Header
        style={styles.titleofForm}
        title="Create post"
        imageStyle={styles.log}
        image={FusionLogo}
      />
      <CheckedListUsers />
      <Input
        type="text"
        style={styles.searchUsers}
        id="grupa"
        name="grupa"
        placeholder="Search..."
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
      />
      <FormList criteria={query} />
      <textarea
        className={styles["input-box-txt"]}
        placeholder="Add message..."
        onChange={(e) => readMsgHandler(e)}
        value={message}
        autoComplete="off"
        type="text"
      />
      <Button style={styles["btn-addpost"]} type="submit" title="Save" />
    </form>
  );
}
