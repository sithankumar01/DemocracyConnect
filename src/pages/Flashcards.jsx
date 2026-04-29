import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import './Flashcards.css';

const flashcardsData = [
  { term: 'EVM', definition: 'Electronic Voting Machine. Used in India since 1999 to securely cast and record votes, replacing paper ballots.' },
  { term: 'VVPAT', definition: 'Voter Verifiable Paper Audit Trail. An independent machine attached to the EVM that prints a paper slip of the cast vote for verification.' },
  { term: 'NOTA', definition: 'None Of The Above. An option on the EVM allowing a voter to officially reject all the candidates running in their constituency.' },
  { term: 'MCC', definition: 'Model Code of Conduct. A set of guidelines issued by the Election Commission to regulate political parties and candidates prior to elections.' },
  { term: 'ECI', definition: 'Election Commission of India. The autonomous constitutional authority responsible for administering election processes in India.' },
  { term: 'Lok Sabha', definition: 'The House of the People (Lower House). Members are directly elected by the citizens of India.' }
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    }, 150);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcards-page animate-fade-in">
      <div className="page-header text-center">
        <h1>Election <span className="tiranga-gradient-text">Glossary</span></h1>
        <p className="subtitle">Learn key terms related to the Indian election system.</p>
      </div>

      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
          <div className="flashcard-inner">
            <div className="flashcard-front glass-panel">
              <span className="card-hint">Click to flip</span>
              <h2>{flashcardsData[currentIndex].term}</h2>
              <RefreshCw size={24} className="flip-icon text-muted" />
            </div>
            <div className="flashcard-back glass-panel">
              <p>{flashcardsData[currentIndex].definition}</p>
            </div>
          </div>
        </div>

        <div className="flashcard-controls">
          <button onClick={handlePrev} className="control-btn" aria-label="Previous card">
            <ChevronLeft size={24} />
          </button>
          <span className="card-counter">
            {currentIndex + 1} / {flashcardsData.length}
          </span>
          <button onClick={handleNext} className="control-btn" aria-label="Next card">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
