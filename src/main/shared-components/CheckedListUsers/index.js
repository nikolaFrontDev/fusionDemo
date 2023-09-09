import React from "react";
import styles from "./CheckedListUsers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../../redux/reducers/post-slice";

function CheckedListUsers() {
  const checkMembers = useSelector((state) => state.postSlice.checkMembers);
  const dispatch = useDispatch();

  const removeUser = (_, member) => {
    dispatch(postActions.removeCheckMembers(member));
  };

  return (
    <div>
      {checkMembers.length > 0 && (
        <div className={styles.previewCheckUsers}>
          {checkMembers
            ? checkMembers.map((member) => (
                <span className={styles.userTag} key={member.id}>
                  <i>
                    {member.type === 0
                      ? member.name + " " + member.lastName + " "
                      : member.name}
                  </i>
                  <span
                    className={styles.userTagRemove}
                    onClick={(e) => removeUser(e, member)}
                  >
                    &#x2715;
                  </span>
                </span>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default CheckedListUsers;
