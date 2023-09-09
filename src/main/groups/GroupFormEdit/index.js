import React from 'react'
import Header from "../../shared-components/Header";
import FusionLogo from "../../../img/green-power.png";
import styles from "./GroupFormEdit.module.css"
import GroupDropdown from '../GroupDropdown';
import GroupMembers from '../GroupMembers';
import { useDispatch, useSelector } from 'react-redux';
import { groupsActions } from '../../../redux/reducers/groups-slice';

import Input from '../../shared-components/Input';

export default function GroupFormEdit() {

    const group = useSelector((state) => state.groupsSlice.group);

    const dispatch = useDispatch();
    const resetHandler = (e) => {
        e.preventDefault();
        dispatch(groupsActions.setEditMode({ edit: false }));
    };
    const saveChangesHandler = (e) => {
        e.preventDefault();
        dispatch(groupsActions.setUpdateGroup({ group }))
        dispatch(groupsActions.setEditMode({ edit: false }));
    };
    const changeGroupNameHandler = (e) => {
        const name = e.target.value;
        dispatch(groupsActions.updateGroupName({ group, groupName: name  }))
    }

    return (
        <>
            {group ? (
                <form action="#" method="post">
                    <Header
                        style={styles.titleEditGroup}
                        title="Group"
                        image={FusionLogo}
                        imageStyle={styles.log}
                    />

                    <Input
                        type="text"
                        style={styles.searchUsers}
                        autoComplete="off"
                        onChange={changeGroupNameHandler}
                        value={group.name}
                    />
                    <GroupDropdown group={group} />
                    <GroupMembers users={group.users} group={group} />
                    <button className={styles.btnAdmin} id={group.id} onClick={saveChangesHandler}>Sačuvaj promene</button>
                    <button className={styles.btnAdminRemove} onClick={resetHandler}>Otkaži promene</button>
                </form>

            ) : null}
        </>
    )
}
