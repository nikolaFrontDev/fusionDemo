import React from 'react'
import ReactDOM from "react-dom";

import Backdrop from '../../shared-components/backdrop';
import ModalOverlay from '../../shared-components/modalOverlay';

function GroupBackdrop(props) {
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

export default GroupBackdrop