import React from "react";
import styles from "../posts/Post.module.css";
import Sidebar from "./../shared-components/sidebar/Sidebar";
import BackdropPost from "./BackdropPost";
import PostDateSearch from "./PostDateSearch";
import PostSearch from "./PostSearch";
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../store/posts-slice";

export default function Post() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);
  const date = useSelector((state) => state.posts.date);
  const post = useSelector((state) => state.posts.post);

  const modalFormHandler = () => {
    dispatch(postsActions.resetPost());
  };

  return (
    <div className={styles.parentpost}>
      <Sidebar>
        {post.id ? (
          <BackdropPost onConfirm={modalFormHandler} post={post} />
        ) : (
          <div>
            <div className={styles["container-finder"]}>
              <PostSearch placeholder="Search group or user..." />
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
