import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewQuizForm(props) {
  function handleNewQuizSubmission(event) {
    event.preventDefault();
    props.onNewQuizCreation({
      title: event.target.title.value,
      sentence1: event.target.sentence1.value,
      pos1: event.target.pos1.value,
      sentence2: event.target.sentence2.value,
      pos2: event.target.pos2.value,
      sentence3: event.target.sentence3.value,
      pos3: event.target.pos3.value,
      sentence4: event.target.sentence4.value,
      pos4: event.target.pos4.value,
      sentence5: event.target.sentence5.value,
      pos5: event.target.pos5.value
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewQuizSubmission}
        buttonText={"Submit My Madlib!"}
      />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
}

export default NewQuizForm;