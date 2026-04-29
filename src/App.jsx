import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Flashcards from './pages/Flashcards';
import Quiz from './pages/Quiz';
import Chatbot from './pages/Chatbot';
import ElectionWalkthrough from './pages/ElectionWalkthrough';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container tiranga-gradient-bg">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/walkthrough" element={<ElectionWalkthrough />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
