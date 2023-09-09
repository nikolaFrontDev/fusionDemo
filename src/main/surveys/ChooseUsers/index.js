import React, { useEffect, useState } from "react";
import styles from "./ChooseUsers.module.css";
import { FaUser, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
function ChooseUsers() {
  const groups = useSelector((state) => state.groups.groups);
  const users = useSelector((state) => state.users.users);
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    let membersGroup = [...users, ...groups];
    setMembers(membersGroup);
  }, []);

  //pamti check status
  const checkUsers = (e) => {
    // var permissions_array = [...serverData];
    // if (e.target.checked) {
    //   let checkedUser = users.find((user) => user.name === e.target.name);
    //   setCheckedUsersIds([...checkedUsersIds, checkedUser.name]);
    //   permissions_array = [...serverData, e.target.id];
    // } else {
    //   setCheckedUsersIds(
    //     checkedUsersIds.filter((user) => user !== e.target.name)
    //   );
    //   permissions_array.splice(serverData.indexOf(e.target.id), 1);
    // }
    // console.log(permissions_array);
    // setServerData(permissions_array);
  };
  const clearHandlerGroup = () => {
    document.querySelector("#grupa").value = "";
    setQuery("");
    setShow2(false);
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
            placeholder="Unesite pretragu..."
            autoComplete="off"
            onChange={(e) =>
              setQuery(e.target.value) || e.target.value.length >= 3
                ? setShow2(true)
                : setShow2(false)
            }
          />
          <button
            className={`${
              show2 === true ? styles["clear-icon"] : styles["clear-icon-hide"]
            }`}
            type="button"
            onClick={clearHandlerGroup}
          ></button>
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
                      //   disabled={member.user_id && true}
                      //   checked={
                      //     member.user_id
                      //       ? true
                      //       : checkedUsersIds.includes(member.name)
                      //   }
                    />
                    <span className={styles["checkbox-custom"]}></span>

                    <span
                      className={`${
                        member.user_id
                          ? styles.disabled
                          : styles.usersAddQuestions
                      }`}
                    >
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

export default ChooseUsers;
