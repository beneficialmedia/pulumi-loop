"use client";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { SharpLightPanelless } from "survey-core/themes/sharp-light-panelless";
import { useCallback } from "react";
// import { addSurveyFeedback } from "../../firebase/services/institution";

const surveyJson = {
  pages: [
    {
      elements: [
        {
          name: "name",
          type: "text",
          title: "Name",
          placeholder: "Enter your name here",
          minLength: 3,
          maxLength: 25,
          isRequired: true,
        },
        {
          type: "rating",
          name: "rate-craig",
          title: "How would you rate Craig today?",
          rateType: "smileys",
          scaleColorMode: "colored",
          rateCount: 5,
          rateMax: 5,
          displayMode: "buttons",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          type: "comment",
          name: "craig-like",
          title: "What did you like about Craig today?",
          placeholder: "Help Pulumi know what Craig is doing right.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
        {
          type: "comment",
          name: "craig-dislike",
          title: "What did you dislike about Craig today?",
          placeholder: "Help Pulumi know what Craig is doing wrong.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
        {
          type: "comment",
          name: "craig-improve",
          title: "Is there anything else you'd like to share about Craig?",
          placeholder: "Help Pulumi know more about Craig.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "craig-recommend",
          title:
            "On a scale of 1 to 10, how would you rate Craig's mood today? (1 being the worst and 10 being the best)",
          type: "rating",
          rateMin: 0,
          rateMax: 10,
        },
        {
          name: "craig-overall-rating",
          title: "Overall, how would you rate Craig?",
          type: "radiogroup",
          choices: [
            { value: 3, text: "Excellent" },
            { value: 2, text: "Good" },
            { value: 1, text: "Poor" },
          ],
          isRequired: true,
        },
      ],
    },
  ],
  completeText: "Send your feedback",
  completedHtml: `<div>
    <p class="mx-auto w-full"><span>Thanks for sharing. </span><span><a href="/" class="font-semibold">Send more feedback about Craig!</a></span></p>
    <img src="https://raw.githubusercontent.com/beneficialmedia/assets/main/coffee-hat-pointing-up.png" class="my-16 mx-auto" alt="Thank you for sharing your feedback!" />
    </div>`,
};

const SurveyForm = () => {
  const survey = new Model(surveyJson);

  survey.applyTheme(SharpLightPanelless);

  const surveyComplete = useCallback(async (survey) => {
    survey.setValue("code", "dylan");

    try {
      console.log(survey.data);
      // await addSurveyFeedback(survey.data);
    } catch (e) {
      console.log(e);
      alert("Something went horribly wrong!");
    }

    // saveSurveyResults("https://your-web-service.com/" + SURVEY_ID, survey.data);
  }, []);

  survey.onComplete.add(surveyComplete);

  return (
    <div className="">
      <Survey model={survey} />
    </div>
  );
};

export default SurveyForm;
