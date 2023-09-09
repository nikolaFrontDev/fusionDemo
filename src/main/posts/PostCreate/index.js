import React, { useEffect, useState } from "react";
import FusionLogo from "../../../img/green-power.png";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../../redux/reducers/post-slice";
import { postsActions } from "../../../redux/reducers/posts-slice";
import Sidebar from "../../shared-components/sidebar";
import LayoutBox from "../../shared-components/LayoutBox";
import Header from "../../shared-components/Header";
import Input from "../../shared-components/Input";
import Button from "../../shared-components/Button";
import styles from './PostCreate.module.css';
import CheckedListUsers from "../../shared-components/CheckedListUsers";
import FormList from "../../shared-components/form/FormList";


export default function PostCreate() {
  const [query, setQuery] = useState("");

  const groups = useSelector((state) => state.groupsSlice.groups);
  const users = useSelector((state) => state.usersSlice.users);
  const checkMembers = useSelector((state) => state.postSlice.checkMembers);
  const message = useSelector((state) => state.postSlice.message);

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
    <Sidebar>
      <LayoutBox>
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
      </LayoutBox>
    </Sidebar>
  );
}



