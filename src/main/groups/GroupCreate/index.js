import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../shared-components/Sidebar'
import LayoutBox from '../../shared-components/LayoutBox'
import GroupCreateUser from '../GroupCreateUser'
import GroupUserEdit from '../GroupUserEdit'

function GroupCreate() {
  const user = useSelector((state)=>state.userSlice.user);

  return (
    <Sidebar>
      <LayoutBox>
        {Object.keys(user).length === 0 && <GroupCreateUser />}
        {Object.keys(user).length > 0 && <GroupUserEdit />}
      </LayoutBox>
    </Sidebar>
  )
}

export default GroupCreate