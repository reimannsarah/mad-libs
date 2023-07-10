import React from "react";

function TakeQuiz(props) {
  const quiz = props.selection;

  // function handleQuizSubmit
  return (
    <React.Fragment>
      <h1>{quiz.title}</h1>
      <form>
        <p>{quiz.sentence1}</p>
        <input type="text" placeholder={quiz.pos1} />
        <p>{quiz.sentence2}</p>
        <input type="text" placeholder={quiz.pos2} />
        <p>{quiz.sentence3}</p>
        <input type="text" placeholder={quiz.pos3} />
        <p>{quiz.sentence4}</p>
        <input type="text" placeholder={quiz.pos4} />
        <p>{quiz.sentence5}</p>
        <input type="text" placeholder={quiz.pos5} />

        <button type="submit">See Madlib Result!</button>
      </form>
    </React.Fragment>
  )
}

export default TakeQuiz;