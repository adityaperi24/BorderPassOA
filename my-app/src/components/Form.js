import React, { useState } from "react";
import Question from "./Question";
import { questions } from "../testfiles/initialquestions";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./Css";

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const classes = useStyles();

  const handleSubmit = () => {
    console.log(answers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={classes.questionnaireContainer}>
      <Typography variant="h4" className={classes.questionnaireTitle}>Questionnaire</Typography>
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onNext={handleNext}
          onBack={handleBack}
          onSubmit={handleSubmit}
          answers={answers}
          setAnswers={setAnswers}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}
      {!currentQuestion && <Typography variant="h6" className={classes.thankYouMessage}>Thank you for completing the questionnaire!</Typography>}
    </div>
  );
};

export default Questionnaire;