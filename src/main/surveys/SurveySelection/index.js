import React, { useState } from "react";
import styles from "./SurveySelection.module.css";

import { useSelector } from "react-redux";
function ChooseSurvey({ criteria }) {
  const surveys = useSelector((state) => state.surveysSlice.surveys);
  const [selected, setSelected] = useState("");

  const radioChangeHandler = (e) => {
    let id = e.target.id;
    if (id != null) {
      setSelected(id);
    }
  };
  return (
    <div>
      <div className={styles.borderaddQuestionnaire}>
        {surveys
          ? surveys
              .filter((survey) =>
                survey.name.toLowerCase().includes(criteria.toLowerCase())
              )
              .map((survey) => (
                <div key={survey.id} className={styles.forgetradio}>
                  <label className={styles["radio-label"]}>
                    <input
                      type="radio"
                      id={survey.id}
                      name={survey.name}
                      value={survey.name}
                      onChange={radioChangeHandler}
                      checked={selected == survey.id}
                    />
                    <span className={styles["radio-custom"]}></span>
                    <span className={styles.usersAddQuestions}>
                      {survey.name}
                    </span>
                  </label>
                </div>
              ))
          : "nema"}
      </div>
    </div>
  );
}

export default ChooseSurvey;
