import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../shared-components/modalOverlay/ModalOverlay";
import Backdrop from "../shared-components/backdrop/Backdrop";


const BackdropPost = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} post={props.post} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default BackdropPost;
