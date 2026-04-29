import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 🙏 I am your DemocracyConnect assistant. How can I help you understand the Indian election process today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response based on simple keyword matching for demonstration
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't have information on that specific topic. Try asking about EVMs, the Model Code of Conduct, or how to register to vote.";
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes('evm') || lowerInput.includes('machine')) {
        botResponse = "EVM stands for Electronic Voting Machine. It consists of a Control Unit and a Balloting Unit. It's designed to securely record votes and is tamper-proof. It was first used in India in 1982 in Kerala.";
      } else if (lowerInput.includes('vvpat')) {
        botResponse = "VVPAT (Voter Verifiable Paper Audit Trail) is a system attached to the EVM that prints a paper slip with the candidate's name and symbol for the voter to verify their vote before it drops into a sealed box.";
      } else if (lowerInput.includes('age') || lowerInput.includes('eligible') || lowerInput.includes('vote')) {
        botResponse = "In India, the voting age is 18 years. Any Indian citizen who is 18 years or older on the qualifying date (usually January 1st of the election year) can register to vote.";
      } else if (lowerInput.includes('mcc') || lowerInput.includes('code of conduct')) {
        botResponse = "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission. It comes into effect as soon as the election schedule is announced and ensures a level playing field by restricting certain activities of the ruling party.";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chatbot-page animate-fade-in">
      <div className="page-header text-center">
        <h1>Democracy <span className="tiranga-gradient-text">Assistant</span></h1>
        <p className="subtitle">Ask any questions you have about voting and elections.</p>
      </div>

      <div className="chat-container glass-panel">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
              <div className="message-avatar">
                {msg.sender === 'bot' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className={`message-bubble ${msg.sender === 'bot' ? 'bg-light' : 'bg-saffron text-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot">
              <div className="message-avatar">
                <Bot size={20} />
              </div>
              <div className="message-bubble bg-light typing-indicator">
                <Loader2 size={18} className="spin" /> Typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="chat-input"
          />
          <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
