import React, {  useState } from "react";
import styles from "./SurveyView.module.css";
import SurveyViewList from "../SurveyViewList";

function SurveyView({ surveys }) {
  const [filterValue, filterRef] = useState("");
  const [show, setShow] = useState(false);
  const clearHandlerGroup = () => {
    setShow(false);
    filterRef("");
  };

  const handleInputChange = (e) => {
    filterRef(e.target.value);
    if (filterValue !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className={styles.boxPreview}>
      <input
        type="text"
        value={filterValue}
        className={styles.searchPoll}
        onChange={handleInputChange}
        placeholder="Search survey..."
      />

      <button
        className={`${
          show === true ? styles.clearinput : styles.clearinputhide
        }`}
        type="button"
        onClick={clearHandlerGroup}
      ></button>
      <SurveyViewList data={surveys} criteria={filterValue} />
    </div>
  );
}

export default SurveyView;
