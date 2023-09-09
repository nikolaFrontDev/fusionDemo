
import { useSelector } from "react-redux";
import Sidebar from "../../shared-components/Sidebar";
import LayoutBox from "../../shared-components/LayoutBox";
import GroupForm from "../GroupForm";
import EditGroupForm from "../GroupFormEdit";

const Group = () => {
 
  const groups = useSelector((state) => state.groupsSlice.groups);
  const editMode = useSelector((state)=> state.groupsSlice.editMode);

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
