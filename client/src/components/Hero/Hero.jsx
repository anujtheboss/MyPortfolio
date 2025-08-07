import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = ['Full-Stack Developer', 'React Specialist', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const typeWriter = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
    };

    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(typeWriter, speed);

    if (!isDeleting && charIndex === texts[textIndex].length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>John Smith</h1>
          <div className="typing-text">
            {typingText}
            <span className="cursor">|</span>
          </div>
          <p>
            Passionate software engineer with 5+ years of experience building scalable web applications. 
            I love turning complex problems into simple, beautiful solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-code"></i>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="John Smith - Software Engineer" 
              className="profile-image"
            />
            <div className="social-links">
              <a href="https://github.com" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:john.smith@email.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
