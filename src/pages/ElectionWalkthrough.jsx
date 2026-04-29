import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Play } from 'lucide-react';
import './ElectionWalkthrough.css';

const ElectionWalkthrough = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: t('timeline.step1_title'),
      description: t('timeline.step1_desc'),
      image: "https://images.unsplash.com/photo-1540910419892-f0c7620ba806?auto=format&fit=crop&q=80&w=1000", // Generic election context
      details: "The process begins with a formal announcement. The Model Code of Conduct (MCC) is crucial as it prevents the ruling party from gaining unfair advantages."
    },
    {
      id: 2,
      title: t('timeline.step2_title'),
      description: t('timeline.step2_desc'),
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1000",
      details: "Candidates must be at least 25 years old. They submit an affidavit disclosing assets, educational background, and any criminal record."
    },
    {
      id: 3,
      title: t('timeline.step3_title'),
      description: t('timeline.step3_desc'),
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000",
      details: "The Returning Officer checks every paper. If everything is in order, the candidate is officially in the race. Withdrawal is allowed if they change their mind."
    },
    {
      id: 4,
      title: t('timeline.step4_title'),
      description: t('timeline.step4_desc'),
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1000",
      details: "This is when the noise happens! Rallies, posters, and speeches. But remember, all campaigning must stop 48 hours before the voting starts."
    },
    {
      id: 5,
      title: t('timeline.step5_title'),
      description: t('timeline.step5_desc'),
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1000",
      details: "The most important day. Citizens go to booths, show their ID, and press the button on the EVM. The ink mark on the finger is a badge of honor!"
    },
    {
      id: 6,
      title: t('timeline.step6_title'),
      description: t('timeline.step6_desc'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      details: "The machines are opened under strict supervision. Once counting is over, the candidate with the most votes is declared the winner."
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="walkthrough-container animate-fade-in">
      <div className="walkthrough-header">
        <h1>Interactive <span className="tiranga-gradient-text">Journey</span></h1>
        <p>Follow the steps of the Indian Election in this guided experience.</p>
      </div>

      <div className="walkthrough-card glass-panel">
        <div className="progress-bar">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`progress-dot ${index <= currentStep ? 'active' : ''}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="step-content"
          >
            <div className="step-image-wrapper">
              <img src={steps[currentStep].image} alt={steps[currentStep].title} className="step-image" />
              <div className="step-badge">Step {steps[currentStep].id}</div>
            </div>
            
            <div className="step-text">
              <h2>{steps[currentStep].title}</h2>
              <p className="step-desc">{steps[currentStep].description}</p>
              <div className="details-box">
                <Play size={16} className="text-saffron" />
                <p>{steps[currentStep].details}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="walkthrough-controls">
          <button 
            onClick={handlePrev} 
            disabled={currentStep === 0}
            className="nav-btn prev"
          >
            <ChevronLeft size={20} /> Back
          </button>
          
          {currentStep === steps.length - 1 ? (
            <button className="nav-btn finish" onClick={() => setCurrentStep(0)}>
              Start Over <CheckCircle2 size={20} />
            </button>
          ) : (
            <button onClick={handleNext} className="nav-btn next">
              Next Step <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectionWalkthrough;
