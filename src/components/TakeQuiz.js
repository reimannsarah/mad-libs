import React from "react";

function TakeQuiz(props) {
  const quiz = props.selection;
  console.log(quiz)
  console.log(quiz.title)

  // function handleQuizSubmit
  return (
    <React.Fragment>
      <h1>{quiz.title}</h1>
      <form>
        <p>{quiz.sentence1}</p>
        <input type="text" placeholder={quiz.pos1} />
        <p>{quiz.sentence2}</p>
        <input type="text" placeholder={quiz.pos2} />

        <button type="submit">See Madlib Result!</button>
      </form>
    </React.Fragment>
  )
}

export default TakeQuiz;