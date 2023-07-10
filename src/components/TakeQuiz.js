import React from "react";
import { v4 } from "uuid";

function TakeQuiz(props) {
  const quiz = props.selection;

  function handleQuizSubmit(event) {
    event.preventDefault();
    props.onQuizSubmission({
      id: v4(),
      title: quiz.title,
      sentence1: quiz.sentence1,
      pos1: event.target.pos1.value,
      sentence2: quiz.sentence2,
      pos2: event.target.pos2.value,
      sentence3: quiz.sentence3,
      pos3: event.target.pos3.value,
      sentence4: quiz.sentence4,
      pos4: event.target.pos4.value,
      sentence5: quiz.sentence5,
      pos5: event.target.pos5.value
    })
  }

  return (
    <React.Fragment>
      <h1>{quiz.title}</h1>
      <form onSubmit={handleQuizSubmit}>
        <input name="pos1" type="text" placeholder={quiz.pos1} />
        <input name="pos2" type="text" placeholder={quiz.pos2} />
        <input name="pos3" type="text" placeholder={quiz.pos3} />
        <input name="pos4" type="text" placeholder={quiz.pos4} />
        <input name="pos5" type="text" placeholder={quiz.pos5} />

        <button type="submit">See Madlib Result!</button>
      </form>
    </React.Fragment>
  )
}

export default TakeQuiz;