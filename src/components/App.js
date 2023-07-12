import QuizControl from './QuizControl';
import './App.css';
// import Header from "./Header.js"
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignOut from './SignOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<QuizControl />} />
        <Route path="/sign-out" element={<SignOut />} />        
      </Routes>
    </Router>
  );
}

export default App;
