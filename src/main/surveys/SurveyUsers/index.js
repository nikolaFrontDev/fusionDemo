import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SurveyUsers.module.css";
import Sidebar from "../../shared-components/Sidebar";
import ChooseSurvey from "../SurveySelection";
import ChooseUsers from "../SurveyChooseUsers";
import LayoutBox from "../../shared-components/LayoutBox";

function SurveyUsers() {
  const [message, setMessage] = useState("");

  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit");
  };
  return (
    <Sidebar>
      {message ? (
        <></>
      ) : (
        <LayoutBox>
          <form action="#" method="post" onSubmit={submitHandler}>
            <div className={styles.titleaddpost}>
              <h3>Surveys</h3>
            </div>
            <input
              type="text"
              className={styles.searchUsers}
              id="anketa"
              name="anketa"
              placeholder="Search..."
              autoComplete="off"
              onChange={(e) => setQuery(e.target.value)}
            />
            <ChooseSurvey criteria={query} />
            <ChooseUsers />
            <button className={styles["btn-addpost"]} type="submit">
              Add survey
            </button>
          </form>
        </LayoutBox>
      )}
    </Sidebar>
  );
}

export default SurveyUsers;
