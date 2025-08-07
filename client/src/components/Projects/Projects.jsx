import { useEffect, useState } from 'react';
import './Projects.css';

function Projects() {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, inventory management, and real-time analytics dashboard.",
      icon: "fas fa-shopping-cart",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, team communication, and advanced reporting features.",
      icon: "fas fa-tasks",
      technologies: ["Vue.js", "Python", "FastAPI", "WebSocket", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A comprehensive business intelligence dashboard with interactive charts, real-time data visualization, and customizable reporting.",
      icon: "fas fa-chart-line",
      technologies: ["React", "D3.js", "Node.js", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile-First Web App",
      description: "A progressive web application with offline capabilities, push notifications, and seamless mobile experience across all devices.",
      icon: "fas fa-mobile-alt",
      technologies: ["React Native", "Expo", "Firebase", "PWA", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "AI-Powered Chatbot",
      description: "An intelligent customer service chatbot with natural language processing, sentiment analysis, and integration with multiple communication channels.",
      icon: "fas fa-robot",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Secure API Gateway",
      description: "A robust API gateway with authentication, rate limiting, request routing, monitoring, and comprehensive security features.",
      icon: "fas fa-shield-alt",
      technologies: ["Node.js", "Express", "JWT", "OAuth2", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`projects ${isVisible ? 'revealed' : ''}`}>
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A collection of my recent work showcasing various technologies and problem-solving approaches</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="link-primary">Live Demo</a>
                  <a href={project.githubUrl} className="link-secondary">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
