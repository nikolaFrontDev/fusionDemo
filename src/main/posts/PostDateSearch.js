import React, { useRef } from "react";

import styles from "../posts/Post.module.css";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/posts-slice";

function PostDateSearch() {
  const ref = useRef();
  const dispatch = useDispatch();

  const searchDatePosts = (event) => {  
    event.preventDefault();
    dispatch(postsActions.setDate({date : event.target.value}));
    dispatch(postsActions.filterByDate({value: event.target.value}))
  };
  return (
    <div>
      <div className={styles.finder}>
        <div className={styles.finder__outer}>
          <div className={styles.finder__inner}>
            <input
              className={styles.finder__input}
              type="text"
              placeholder="Choose date"
              ref={ref}
              onChange={searchDatePosts}
              onFocus={() => (ref.current.type = "date")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDateSearch;
