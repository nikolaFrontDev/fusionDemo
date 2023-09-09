import React from "react";
import Sidebar from "../shared-components/sidebar/Sidebar";
import LayoutBox from "../shared-components/layout/LayoutBox";
import CreateMessage from "./CreateMessage";



export default function AddPost() {
  return (
    <Sidebar>
      <LayoutBox>
        <CreateMessage />
      </LayoutBox>
    </Sidebar>
  );
}
