import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Alkhidr Inc.",
    type: "Client Project · WordPress",
    desc: "Corporate website for a US-based international trade company. Built with WordPress & Elementor — covers services, products, consultancy and import/export.",
    tags: ["WordPress", "Elementor", "CSS", "Responsive"],
    live: "https://alkhidr.com",
    github: null,
    isLive: true,
  },
  {
    title: "Realtime Chat Application",
    type: "Personal Project · Full Stack",
    desc: "AI-powered real-time chat app integrating Dialogflow ES with WebSocket, Node.js backend, and a Next.js + TypeScript frontend.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Node.js", "Dialogflow"],
    live: null,
    github: "https://github.com/iRifshaAshraf/RealtimeChatApplication",
    isLive: false,
  },
];

const Projects = () => {
  return (
    <section className="projects-section me-lg-5" id="projects">
      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            {/* About <span>Me</span> */}
            Featured <span>Work</span>
            <span className="line"></span>
            <h3 className="bg-text hola">Projects</h3>
          </h2>
        </div>
        {/* <h2 className="text-center mb-5">
          Projects
          <span className="line d-block mx-auto"></span>
        </h2> */}
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="card-header">
                <div className="card-meta">
                  <span className="card-type">{proj.type}</span>
                  <h3 className="card-name">{proj.title}</h3>
                </div>
                <div className="card-links">
                  {proj.isLive && <span className="live-badge">● Live</span>}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      Visit ↗
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="card-desc p-4">{proj.desc}</p>
              <div className="card-tags px-4 pb-4">
                {proj.tags.map((tag, j) => (
                  <span className="tag" key={j}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
