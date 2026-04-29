import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Timeline.css';
import { Calendar, Users, FileText, Megaphone, CheckSquare, BarChart } from 'lucide-react';

const Timeline = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('timeline.step1_title'),
      description: t('timeline.step1_desc'),
      icon: <Calendar size={24} />,
      color: 'saffron'
    },
    {
      title: t('timeline.step2_title'),
      description: t('timeline.step2_desc'),
      icon: <FileText size={24} />,
      color: 'navy'
    },
    {
      title: t('timeline.step3_title'),
      description: t('timeline.step3_desc'),
      icon: <Users size={24} />,
      color: 'green'
    },
    {
      title: t('timeline.step4_title'),
      description: t('timeline.step4_desc'),
      icon: <Megaphone size={24} />,
      color: 'saffron'
    },
    {
      title: t('timeline.step5_title'),
      description: t('timeline.step5_desc'),
      icon: <CheckSquare size={24} />,
      color: 'navy'
    },
    {
      title: t('timeline.step6_title'),
      description: t('timeline.step6_desc'),
      icon: <BarChart size={24} />,
      color: 'green'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="timeline-page">
      <motion.div 
        className="page-header text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{t('timeline.title1')} <span className="tiranga-gradient-text">{t('timeline.title2')}</span></h1>
        <p className="subtitle">{t('timeline.subtitle')}</p>
      </motion.div>

      <motion.div 
        className="timeline-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="timeline-item" 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`timeline-icon bg-${step.color}`}>
              {step.icon}
            </div>
            <motion.div 
              className="timeline-content glass-panel"
              whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <h2>{index + 1}. {step.title}</h2>
              <p>{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
