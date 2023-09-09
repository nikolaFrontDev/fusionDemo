import React from "react";

import styles from "./PostCard.module.css";

const PostCard = ({ className, children }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default PostCard;
