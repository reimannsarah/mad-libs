import React from "react";

function Quiz(props) {
  return (
    <React.Fragment>
      <h3 onClick={() => props.whenQuizClicked(props.id)}>{props.title}</h3>
      <button onClick={() => props.whenEditClicked(props.id)}>Edit</button>
      <button onClick={() => props.whenDeleteClicked(props.id)}>Delete</button>
    </React.Fragment>
  );
}

export default Quiz;