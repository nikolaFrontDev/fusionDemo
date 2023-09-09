import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../shared-components/Backdrop";
import ModalOverlay from "../../shared-components/ModalOverlay";



const PostBackdrop = (props) => {
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

export default PostBackdrop;
