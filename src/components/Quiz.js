import React from "react";

function Quiz(props) {
  return (
    <div>
      <h3 onClick={() => props.whenQuizClicked(props.id)}>{props.title}</h3>
      <p>Authored by {props.author} on {props.timeCreated}</p>
      <button onClick={() => props.whenEditClicked(props.id)}>Edit</button>
      <button onClick={() => props.whenDeleteClicked(props.id)}>Delete</button>
    </div>
  );
}

export default Quiz;