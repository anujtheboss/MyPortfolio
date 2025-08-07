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
      title: "E-Learning LMS Platform",
      description: "A full-stack e-learning platform with user authentication, course management, and real-time analytics dashboard.",
      icon: "fas fa-book",
      technologies: ["React", "Django", "Mysql", "Stripe API", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/AnuzThapa/E-Learning-LMS-Platform"
    },
    {
      id: 2,
      title: "Smart Hospital System",
      description: "A comprehensive hospital management system with appointment scheduling, patient records, and telemedicine features with AI integration.",
      icon: "fas fa-stethoscope",
      technologies: ["React", "Django", "JWT", "LLMs"],
      liveUrl: "#",
      githubUrl: "https://github.com/AnuzThapa/Smart-Hospital-System"
    },
    {
      id: 3,
      title: "MCQ Generator with NLP",
      description: "A comprehensive business intelligence dashboard with interactive charts, real-time data visualization, and customizable reporting.",
      icon: "fas fa-question-circle",
      technologies: ["React", "Django","LLMs", "NLP", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/BirendraKSharma/mcqs_generation"
    },
    {
      id: 4,
      title: "MultiModal RAG",
      description: "A RAG based website that takes documents and extract all the multimodal data from it and provides a chat interface to interact with the data.",
      icon: "fas fa-magic",
      technologies: ["React", "Gemini API", "Firebase", "LangChain"],
      liveUrl: "#",
      githubUrl: "https://github.com/AnuzThapa/MultiModal-RAG"
    },
    {
      id: 5,
      title: "OLLAMA bot",
      description: "An intelligent local model based chatbot that mimic the feature of ChatGPT with local models.",
      icon: "fas fa-robot",
      technologies: ["Python", "React", "NLP", "Nextjs", "OLLAMA"],
      liveUrl: "#",
      githubUrl: "https://github.com/anujtheboss/Gemini-clone"
    },
    {
      id: 6,
      title: "Agentic RAG Researcher",
      description: "RAG based research assistant that can search the web, summarize articles, and provide insights on various topics.",
      technologies: ["React", "FastAPI", "LLM", "Docker"],
      icon:"fas fa-pen",
      liveUrl: "#",
      githubUrl: "https://github.com/AnuzThapa/RAG-Based-Researcher"
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
