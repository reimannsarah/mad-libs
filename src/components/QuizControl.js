import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm"
// import QuizList from "./QuizList"

function QuizControl() {
	const [quizFormVisible, setQuizFormVisible] = useState(false);
  const [quizList, setQuizList] = useState([]);

  const handleAddingNewQuiz = (newQuiz) => {
    const newQuizList = quizList.concat(newQuiz);
    setQuizList(newQuizList);
    setQuizFormVisible(false);
  }

  const handleClick = () => {
    setQuizFormVisible(!quizFormVisible);
  } 

  let currentlyVisible = null;

  if (quizFormVisible) {
    currentlyVisible = 
    <NewQuizForm onNewQuizCreation={handleAddingNewQuiz} />
  } else {
    currentlyVisible = 
    <h1>CRANK THE button OUT OF HERE</h1>
  }
  return (
    <React.Fragment>
      {currentlyVisible}
      <button onClick={handleClick}>SHUT UP</button>
    </React.Fragment>
  )
}

export default QuizControl;