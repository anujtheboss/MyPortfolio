import { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS','Next.js'],
    backend: ['Python', 'Django', 'FastAPI', 'RESTful APIs','Langchain','Langgraph'],
    database: ['PostgreSQL','MySql',"AWS"],
    tools: ['Git', 'Docker','VS-Code','MCP']
  };

  return (
    <section id="about" className={`about ${isVisible ? 'revealed' : ''}`}>
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about my background, skills, and what drives my passion for software development</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate software engineer with a strong foundation in designing and building web applications. Although I have not yet worked professionally in a company,
              I have gained practical experience by completing numerous personal and academic projects. These projects have helped me sharpen my skills in various programming languages, frameworks, and problem-solving techniques.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying current with industry trends. 
              When I'm not coding, you'll find me contributing to open-source projects, mentoring 
              junior developers, or exploring new technologies.
            </p>
            <p>
              My goal is to create software and websites that not only meets business requirements but also 
              provides exceptional user experiences and contributes positively to the community.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-code"></i> Frontend Development</h3>
            <div className="skills-list">
              {skills.frontend.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Backend Development</h3>
            <div className="skills-list">
              {skills.backend.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-database"></i> Database & Cloud</h3>
            <div className="skills-list">
              {skills.database.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Tools & Practices</h3>
            <div className="skills-list">
              {skills.tools.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
