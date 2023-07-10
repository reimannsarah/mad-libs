import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) => {
        return (
          <Quiz
            whenQuizClicked={props.onQuizSelect}
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            whenEditClicked={props.onEditClick}
            whenDeleteClicked={props.onDeleteClick}
          />
        )
      })}
    </React.Fragment>
  );
}

QuizList.propTypes = {
  onQuizSelect: PropTypes.func,
  quizList: PropTypes.array,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default QuizList;