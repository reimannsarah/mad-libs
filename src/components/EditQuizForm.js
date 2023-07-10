import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditQuizForm(props) {
  const { ticket } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz({
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
      pos5: event.target.pos5.value,
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText={"Update MadLib"}
      />
    </React.Fragment>
  )
}

EditQuizForm.propTypes = {
  onEditQuiz: PropTypes.func
}

export default EditQuizForm;