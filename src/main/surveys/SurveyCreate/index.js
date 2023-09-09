import React from "react";
import FormSurvey from "../SurveyForm";
import FormLayoutSurvey from "../SurveyFormLayout";
import ViewSurveys from "../SurveyView";
import PreviewSurvey from "../SurveyPreview";
import { useSelector } from "react-redux";
import Sidebar from "../../shared-components/sidebar";
const SurveyCreate = () => {
  const surveys = useSelector((state) => state.surveysSlice.surveys);
  return (
    <Sidebar>
      {surveys.length > 0 && <ViewSurveys surveys={surveys} />}
      <FormLayoutSurvey>
        <FormSurvey />
        <PreviewSurvey />
      </FormLayoutSurvey>
    </Sidebar>
  );
};
export default SurveyCreate;
