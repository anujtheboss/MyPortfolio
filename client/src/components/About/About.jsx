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
    frontend: ['React.js', 'Vue.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3/SASS', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Python', 'Express.js', 'Django', 'FastAPI', 'RESTful APIs', 'GraphQL', 'Microservices'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    tools: ['Git', 'Agile/Scrum', 'TDD', 'Jest', 'Cypress', 'Webpack', 'Linux', 'Figma']
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
              I'm a passionate software engineer with a strong foundation in full-stack development. 
              My journey began with a Computer Science degree, and I've since worked with startups 
              and established companies to build impactful digital solutions.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying current with industry trends. 
              When I'm not coding, you'll find me contributing to open-source projects, mentoring 
              junior developers, or exploring new technologies.
            </p>
            <p>
              My goal is to create software that not only meets business requirements but also 
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
              <span className="stat-number">20+</span>
              <span className="stat-label">Happy Clients</span>
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
