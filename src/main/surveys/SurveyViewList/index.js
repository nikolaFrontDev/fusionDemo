import React, { useEffect, useState } from "react";
import styles from "./SurveyViewList.module.css";
import PropTypes from "prop-types";
import SurveyViewItem from "../SurveyViewItem";

function SurveyViewList({ data, criteria }) {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(
      data.filter((item) =>
        item.name.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }, [criteria]);

  return (
    <div className={styles.boxforUsers}>
      {criteria &&
        filterData.map((item) => <SurveyViewItem key={item.id} data={item} />)}
      {!criteria &&
        data.map((item) => <SurveyViewItem key={item.id} data={item} />)}
    </div>
  );
}

SurveyViewList.propTypes = {
  data: PropTypes.array,
  criteria: PropTypes.string,
};

export default SurveyViewList;
