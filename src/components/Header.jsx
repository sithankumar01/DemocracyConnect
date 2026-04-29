import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Play, List, BookOpen, BrainCircuit, MessageSquare } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/walkthrough', label: 'Interactive Tour', icon: <Play size={18} /> },
    { path: '/timeline', label: 'Timeline', icon: <List size={18} /> },
    { path: '/flashcards', label: 'Learn', icon: <BookOpen size={18} /> },
    { path: '/quiz', label: 'Quiz', icon: <BrainCircuit size={18} /> },
    { path: '/chatbot', label: 'Ask AI', icon: <MessageSquare size={18} /> },
  ];

  return (
    <header className="app-header glass-panel">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="India Election Logo" className="logo-img" />
          <h1 className="logo-text">Democracy<span className="text-saffron">Connect</span></h1>
        </Link>
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
