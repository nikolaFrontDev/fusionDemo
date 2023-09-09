import React from 'react';

import styles from './PostButton.module.css';

const PostButton = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PostButton;
