import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
// import { format } from 'date-fns'

function QuizList(props) {
  return (
    <div className="quiz-list">
      <h1>MadLibs</h1>
      {props.quizList.map((quiz) => {
        return (
          <Quiz
            whenQuizClicked={props.onQuizSelect}
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            timeCreated={quiz.timeCreated}
            whenEditClicked={props.onEditClick}
            whenDeleteClicked={props.onDeleteClick}
          />
        )
      })}
      <button className="new-quiz-btn" onClick={props.handleClick}>&#43;</button>
    </div>
  );
}

QuizList.propTypes = {
  onQuizSelect: PropTypes.func,
  quizList: PropTypes.array,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default QuizList;