import React, { useState } from 'react';
import { Award, RefreshCcw, AlertCircle } from 'lucide-react';
import './Quiz.css';

const quizQuestions = [
  {
    question: "What is the minimum age to be eligible to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctAnswer: 1
  },
  {
    question: "Who is responsible for conducting free and fair elections in India?",
    options: ["President of India", "Supreme Court", "Election Commission of India", "Prime Minister"],
    correctAnswer: 2
  },
  {
    question: "What does VVPAT stand for?",
    options: [
      "Voter Verifiable Paper Audit Trail",
      "Voting Verification Printed Audit Trail",
      "Voter Validated Paper Account Trail",
      "Valid Vote Printed Audit Trail"
    ],
    correctAnswer: 0
  },
  {
    question: "How many members are there in the Lok Sabha (excluding nominated members)?",
    options: ["543", "545", "250", "500"],
    correctAnswer: 0
  },
  {
    question: "Which option allows a voter to reject all candidates in their constituency?",
    options: ["REJECT", "NONE", "NOTA", "NULL"],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="quiz-page animate-fade-in">
      <div className="page-header text-center">
        <h1>Democracy <span className="tiranga-gradient-text">Quiz</span></h1>
        <p className="subtitle">Test your knowledge about the Indian election system.</p>
      </div>

      <div className="quiz-container glass-panel">
        {showScore ? (
          <div className="score-section text-center">
            <Award size={64} className="score-icon text-saffron" />
            <h2>Quiz Completed!</h2>
            <p className="score-text">
              You scored {score} out of {quizQuestions.length}
            </p>
            <div className="score-feedback">
              {score === quizQuestions.length ? "Excellent! You're an expert on Indian democracy." :
               score >= quizQuestions.length / 2 ? "Good job! But there's still more to learn." :
               "Keep learning! Check out the Flashcards section."}
            </div>
            <button onClick={restartQuiz} className="restart-btn">
              <RefreshCcw size={18} /> Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill bg-green" 
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="question-text">
                {quizQuestions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                let buttonClass = 'answer-btn';
                if (isAnswered) {
                  if (index === quizQuestions[currentQuestion].correctAnswer) {
                    buttonClass += ' correct';
                  } else if (index === selectedOption) {
                    buttonClass += ' incorrect';
                  }
                }
                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isAnswered}
                  >
                    {option}
                    {isAnswered && index === quizQuestions[currentQuestion].correctAnswer && (
                      <AlertCircle size={18} className="status-icon" />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
