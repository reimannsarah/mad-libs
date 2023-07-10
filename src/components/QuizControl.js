import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import TakeQuiz from "./TakeQuiz";
import Result from "./Result";

function QuizControl() {
	const [quizFormVisible, setQuizFormVisible] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleAddingNewQuiz = (newQuiz) => {
    const newQuizList = quizList.concat(newQuiz);
    setQuizList(newQuizList);
    setQuizFormVisible(false);
  }

  const handleClick = () => {
    setQuizFormVisible(!quizFormVisible);
  } 

  const handleChangingQuiz = (id) => {
    const selection = quizList.filter(quiz => quiz.id === id)[0];
    setSelectedQuiz(selection);
  }

  const handleQuizSubmission = (result) => {
    const newResultList = resultList.concat(result);
    setResultList(newResultList);
    setSelectedQuiz(null);
    setResult(result);
  }

  let currentlyVisible = null;

  if (result !== null) {
    currentlyVisible = <Result result={result} />
  } else if (selectedQuiz !== null) {
    currentlyVisible = <TakeQuiz selection={selectedQuiz} onQuizSubmission={handleQuizSubmission}/>
  } else if (quizFormVisible) {
    currentlyVisible = 
    <NewQuizForm onNewQuizCreation={handleAddingNewQuiz} />
  } else {
    currentlyVisible = 
    <React.Fragment>
      <h1>Quizzes</h1>
      <QuizList quizList={quizList} onQuizSelect={handleChangingQuiz} />
    </React.Fragment>
  }
  return (
    <React.Fragment>
      {currentlyVisible}
      <button onClick={handleClick}>SHUT UP</button>
    </React.Fragment>
  )
}

export default QuizControl;