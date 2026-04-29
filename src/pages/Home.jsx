import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { List, BookOpen, BrainCircuit, MessageSquare, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.features.timeline'),
      description: t('home.features.timeline_desc'),
      icon: <List size={32} className="feature-icon" />,
      link: '/timeline',
      color: 'saffron'
    },
    {
      title: t('home.features.learn'),
      description: t('home.features.learn_desc'),
      icon: <BookOpen size={32} className="feature-icon" />,
      link: '/flashcards',
      color: 'green'
    },
    {
      title: t('home.features.quiz'),
      description: t('home.features.quiz_desc'),
      icon: <BrainCircuit size={32} className="feature-icon" />,
      link: '/quiz',
      color: 'blue'
    },
    {
      title: t('home.features.chatbot'),
      description: t('home.features.chatbot_desc'),
      icon: <MessageSquare size={32} className="feature-icon" />,
      link: '/chatbot',
      color: 'saffron'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="home-container">
      <motion.section 
        className="hero-section glass-panel"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            {t('home.title1')} <span className="tiranga-gradient-text">{t('home.title2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('home.subtitle')}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/walkthrough" className="cta-button">
              Take the Interactive Tour <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
        <div className="hero-image">
          <motion.img 
            src="/logo.png" 
            alt="Voting Symbol" 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.section>

      <motion.section 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link to={feature.link} className={`feature-card glass-panel card-${feature.color}`}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Home;
