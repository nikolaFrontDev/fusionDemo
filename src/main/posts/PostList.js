import React from "react";
import styles from "../posts/Post.module.css";
import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    
      <tbody>
        {posts.length > 0
          ? posts.map((post) => {
              return <PostItem post={post} />;
            })
          : posts.length === 0 && <p className={styles.errorMsg}>No data</p>}
      </tbody>
  );
}

export default PostList;
