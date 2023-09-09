import React from 'react'
import ReactDOM from "react-dom";

import Backdrop from './../shared-components/backdrop/Backdrop';
import ModalOverlay from './../shared-components/modalOverlay/ModalOverlay';

function BackdropGroup(props) {
    const approvedFormHandler = (approve) => {
        props.onApprove(approve);
    }
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onConfirm={props.onConfirm} approvedForm={approvedFormHandler} check={props.check} title={props.title} />,
          document.getElementById("overlay-root")
        )}
      </>
    );
}

export default BackdropGroup