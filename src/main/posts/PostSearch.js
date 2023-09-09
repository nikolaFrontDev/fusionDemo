import React, { useRef, useState } from "react";
import styles from "../posts/Post.module.css";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/posts-slice";

function PostSearch({placeholder}) {
  const [clickedGroup, setClickedGroup] = useState(false);
  const [clickedUser, setClickedUser] = useState(false);
  const [searchGroupValue, setSearchGroupValue] = useState("");

  const dispatch = useDispatch();

  const searchGroup = useRef("");
  const searchUser = useRef("");

  const blurHandler = (event) => {
    let id = event.target.id;
    setClickedUser(false);
    setClickedGroup(false);
  };
  const searchBtnGroupHandler = (event) => {
    event.preventDefault();
    dispatch(postsActions.setDate({date : event.target.value}));
    searchGroup.current = event.target.value;

    setSearchGroupValue(event.target.value);
    if (searchUser.current.length === 0 && searchGroup.current.length > 3) {
    //   socket?.emit(
    //     "get_msgs_for_group",
    //     { groupName: searchGroup.current, logId: window.name },
    //     function (dataFromServer) {
    //       console.log(dataFromServer);
    //       setPosts(dataFromServer);
    //     }
    //   );
    }
  };
  const focusHandler = (event) => {
    let id = event.target.id;
    console.log(id);
    if (id == 1) {
      searchGroup.current = "";
      console.log("OBRISANO JE searchGroup " + searchGroup.current);

      setClickedUser(true);
      setClickedGroup(false);
      console.log("id true " + id);
    } else if (id == 2) {
      searchUser.current = "";
      console.log("OBRISANO JE searchUser " + searchUser.current);
      setClickedUser(false);
      setClickedGroup(true);
      console.log("id false " + id);
    } else {
      setClickedUser(false);
      setClickedGroup(false);
    }
  };
  return (
    <div>
      <div
        className={`${
          !clickedGroup
            ? `${styles.finder}`
            : `${styles.finder} ${styles.active}`
        } `}
        onFocus={focusHandler}
        onBlur={blurHandler}
      >
        <div className={styles.finder__outer}>
          <div className={styles.finder__inner}>
            <div className={styles.finder__icon}></div>
            <input
              className={styles.finder__input}
              id="2"
              onChange={searchBtnGroupHandler}
              autoComplete="off"
              placeholder={placeholder}
              type="text"
              maxLength="25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSearch;
