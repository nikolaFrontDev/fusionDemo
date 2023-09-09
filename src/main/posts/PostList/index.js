import React from "react";
import PostItem from "../PostItem";

function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return <PostItem post={post} />;
        })}
    </>
  );
}

export default PostList;
