import React, { useEffect, useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import TakeQuiz from "./TakeQuiz";
import Result from "./Result";
import ResultList from "./ResultList";
import db from "../firebase";
import  { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import EditQuizForm from "./EditQuizForm";

function QuizControl() {
	const [quizFormVisible, setQuizFormVisible] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "quizzes"),
      (collectionSnapshot) => {
        const quizzes = [];
        collectionSnapshot.forEach((doc) => {
          quizzes.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setQuizList(quizzes);
      },
      (error) => {
        setError(error.message)
      }
    );
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "results"),
      (collectionSnapshot) => {
        const results = [];
        collectionSnapshot.forEach((doc) => {
          results.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setResultList(results);
      },
      (error) => {
        setError(error.message)
      }
    );
    return () => unSubscribe();
  }, []);

  const handleAddingNewQuiz = async (newQuiz) => {
    const collectionRef = collection(db, "quizzes");
    await addDoc(collectionRef, newQuiz);
    setQuizFormVisible(false);
  }

  const handleClick = () => {
    if (result !== null) {
      setResult(null);
      setQuizFormVisible(false);
    } else if (selectedQuiz !== null) {
      setSelectedQuiz(null);
      setQuizFormVisible(false);
    } else {
    setQuizFormVisible(!quizFormVisible);
    }
  } 

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingQuizInList = async (quizToEdit) => {
    const quizRef = doc(db, "quizzes", quizToEdit.id);
    await updateDoc(quizRef, quizToEdit);
    setEditing(false);
    setSelectedQuiz(null);
  }
  
  const handleDeletingQuiz = async (id) => {
    await deleteDoc(doc(db, "quizzes", id));
    setSelectedQuiz(null);
  }

  const handleChangingQuiz = (id) => {
    const selection = quizList.filter(quiz => quiz.id === id)[0];
    setSelectedQuiz(selection);
  }

  const handleQuizSubmission = async (result) => {
    const resultRef = collection(db, "results");
    await addDoc(resultRef, result);
    setSelectedQuiz(null);
    setResult(result);
  }

  const handleChangingResult = (id) => {
    const selection = resultList.filter(result => result.id === id)[0];
    setResult(selection);
  }

  let currentlyVisible = null;

  if (error) {
    currentlyVisible = <p>There was an error: {error}</p>
  } else if (editing) {
    currentlyVisible = (
      <EditQuizForm
        quiz={selectedQuiz}
        onEditQuiz={handleEditingQuizInList}
        />
    );
  } else if (result !== null) {
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
      <QuizList quizList={quizList} onQuizSelect={handleChangingQuiz} onEditClick={handleEditClick} onDeleteClick={handleDeletingQuiz}/>
      <h1>MadLib Results</h1>
      <ResultList resultList={resultList} onResultSelection={handleChangingResult} />
    </React.Fragment>
  }
  return (
    <React.Fragment>
      {currentlyVisible}
      {error ? null : <button onClick={handleClick}>SHUT UP</button>}
    </React.Fragment>
  )
}

export default QuizControl;