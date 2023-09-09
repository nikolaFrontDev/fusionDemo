import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './../shared-components/sidebar/Sidebar'
import LayoutBox from './../shared-components/layout/LayoutBox'
import AddUserGroup from './AddUserGroup'
import EditUser from './EditUser'

function CreateGroup() {
  const user = useSelector((state)=>state.user.user);

  return (
    <Sidebar>
      <LayoutBox>
        {Object.keys(user).length === 0 && <AddUserGroup />}
        {Object.keys(user).length > 0 && <EditUser />}
      </LayoutBox>
    </Sidebar>
  )
}

export default CreateGroup