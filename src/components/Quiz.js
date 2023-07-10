import React from "react";

function Quiz(props) {
  return (
    <React.Fragment>
      <h3 onClick={() => props.whenQuizClicked(props.id)}>{props.title}</h3>
    </React.Fragment>
  );
}

export default Quiz;