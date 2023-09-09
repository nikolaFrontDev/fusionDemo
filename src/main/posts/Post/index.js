import React from "react";
import styles from "./Post.module.css";
import Sidebar from "../../shared-components/Sidebar";
import PostBackdrop from "../PostBackdrop";
import PostDateSearch from "../PostDateSearch";
import PostHeader from "../PostHeader/PostHeader";
import PostList from "../PostList";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "./../../../redux/reducers/posts-slice";

export default function Post() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsSlice.posts);
  const filteredPosts = useSelector((state) => state.postsSlice.filteredPosts);
  const date = useSelector((state) => state.postsSlice.date);
  const post = useSelector((state) => state.postsSlice.post);

  const modalFormHandler = () => {
    dispatch(postsActions.resetPost());
  };

  return (
    <div className={styles.parentpost}>
      <Sidebar>
        {post.id ? (
          <PostBackdrop onConfirm={modalFormHandler} post={post} />
        ) : (
          <div>
            <div className={styles["container-finder"]}>
              <PostDateSearch />
            </div>
            <PostHeader>
              {date && <PostList posts={filteredPosts} />}
              {!date && <PostList posts={posts} />}
            </PostHeader>
          </div>
        )}
      </Sidebar>
    </div>
  );
}
