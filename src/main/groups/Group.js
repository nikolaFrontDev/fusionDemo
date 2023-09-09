
import Sidebar from "../shared-components/sidebar/Sidebar.js";
import LayoutBox from "../shared-components/layout/LayoutBox.js";
import EditGroupForm from "./EditGroupForm.js";
import GroupForm from "./GroupForm.js"
import { useSelector } from "react-redux";

const Group = () => {
 
  const groups = useSelector((state) => state.groups.groups);
  const editMode = useSelector((state)=> state.groups.editMode);

  return (
    <Sidebar>
      <LayoutBox>
        {!editMode && <GroupForm groups={groups}  />}
        {editMode  && <EditGroupForm />}
      </LayoutBox>
    </Sidebar>
  );
};
export default Group;
