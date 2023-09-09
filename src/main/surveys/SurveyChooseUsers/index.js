import React, { useEffect, useState } from "react";
import styles from "./SurveyChooseUsers.module.css";
import { FaUser, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { usersSurveyActions } from "../../../redux/reducers/addUsersOnSurvey";

function SurveyChooseUsers() {
  const groups = useSelector((state) => state.groupsSlice.groups);
  const users = useSelector((state) => state.usersSlice.users);
  const checkedUsers = useSelector(
    (state) => state.usersSurveySlice.checkUsers
  );
  const [members, setMembers] = useState([]);

  const [show2, setShow2] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let membersGroup = [...users, ...groups];
    setMembers(membersGroup);
  }, []);

  const checkUsers = (e) => {
    const member = members.find((member) => member.id == e.currentTarget.id);
    if (e.target.checked) {
      dispatch(usersSurveyActions.setUsers(member));
    } else {
      dispatch(usersSurveyActions.removeUsers(member));
    }
  };

  return (
    <>
      {members.length > 0 ? (
        <>
          <div className={styles.titleaddQuestion}>
            <h3>Users</h3>
          </div>
          <input
            type="text"
            className={styles.searchUsers}
            id="grupa"
            name="grupa"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) =>
              setQuery(e.target.value) || e.target.value.length >= 3
                ? setShow2(true)
                : setShow2(false)
            }
          />
          
          <div className={styles.borderaddQuestionnaire}>
            {members
              .filter((member) =>
                member.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((member) => (
                <div key={member.id} className={styles.forget}>
                  <label className={styles["checkbox-label"]}>
                    <input
                      type="checkbox"
                      id={member.id}
                      name={member.name}
                      value={member.name}
                      onChange={(e) => checkUsers(e)}
                      checked={checkedUsers.includes(member)}
                    />
                    <span className={styles["checkbox-custom"]}></span>

                    <span className={`${styles.usersAddQuestions}`}>
                      {member.lastName
                        ? member.name + " " + member.lastName
                        : member.name}
                    </span>
                    <i className={styles["faiconsforuser-s"]}>
                      {member.lastName ? <FaUser /> : <FaUsers />}
                    </i>
                  </label>
                </div>
              ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default SurveyChooseUsers;
