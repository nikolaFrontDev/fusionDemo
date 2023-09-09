import React from "react";
import styles from "./CreateSurvey.module.css";
import FormSurvey from "./FormSurvey";
import FormLayoutSurvey from "./FormLayoutSurvey";
import ViewSurveys from "./ViewSurvey";
import PreviewSurvey from "./PreviewSurvey";
import { useSelector } from "react-redux";
import Sidebar from "../shared-components/sidebar/Sidebar";
const CreateSurvey = () => {
  const surveys = useSelector((state) => state.surveys.surveys);
  return (
    <Sidebar>
      <div className={styles.container}>
        {surveys.length > 0 && <ViewSurveys surveys={surveys} />}
        <FormLayoutSurvey>
          <FormSurvey />
          <PreviewSurvey />
        </FormLayoutSurvey>
      </div>
    </Sidebar>
  );
};
export default CreateSurvey;
