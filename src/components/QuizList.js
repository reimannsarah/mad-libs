import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) => {
        return (
          <Quiz
            whenQuizClicked={props.onQuizSelect}
            key={v4()}
            id={quiz.id}
            title={quiz.title}
          />
        )
      })}
    </React.Fragment>
  );
}

QuizList.propTypes = {
  onQuizSelect: PropTypes.func,
  quizList: PropTypes.array
}

export default QuizList;