import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src= {quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  };

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='questions'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffleAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => {handleSelectAnswer(answer)}}>{answer}</button>
            </li>
        ))}</ul>
      </div>
    </div>
  );
}