import React, { useRef } from "react";
import "./AboutMe.css";
import "./Title.css";

const educationData = [
  {
    duration: "Oct 2020 - Sep 2024",
    degree: "Bachelors in Computer Science",
    institution: "Iqra University",
    icon: "ti-school",
  },
];

const experienceData = [
  {
    duration: "Oct 2021 - Present",
    title: "Frontend Developer",
    company: "Freelance",
    current: true,
    icon: "ti-device-laptop",
    responsibilities: [
      "Developed e-commerce and corporate websites using React JS, Next JS, PHP/Laravel, WordPress, and Shopify",
      "Converted PSD/Figma designs into pixel-perfect, cross-browser-compatible, responsive HTML/CSS",
      "Collaborated with clients to gather requirements and deliver customized, scalable UI solutions",
      "Maintained clean, reusable code standards ensuring consistent UX across all devices",
    ],
  },
  {
    duration: "Feb 2026 - May 2026",
    title: "Full Stack Developer",
    company: "JZ Tech",
    current: false,
    icon: "ti-code",
    responsibilities: [
      "Developing and maintaining front-end and back-end web applications",
      "Building and customizing WordPress websites to meet client design and functionality requirements",
      "Ensuring application performance, security, and scalability across all layers of the stack",
      "Debugging, testing, and resolving issues; collaborating closely with UI/UX designers and developers",
      "Maintaining version-controlled code using Git; participating in deployment and release processes",
    ],
  },
  {
    duration: "May 2024 - Jan 2026",
    title: "Frontend Developer",
    company: "Finnovator IT Solutions",
    current: false,
    icon: "ti-layout-dashboard",
    responsibilities: [
      "Built scalable FinTech and e-commerce platforms using React.js, Next.js, Material-UI, and ShadCN",
      "Integrated RESTful APIs and implemented Redux Toolkit for optimized state and data management",
      "Customized WordPress websites and developed a villa booking site via GoDaddy CMS",
      "Refactored and optimized codebase to improve scalability, readability, and performance",
    ],
  },
  {
    duration: "July 2022 - Feb 2024",
    title: "Security Content Creator",
    company: "ioSENTRIX",
    current: false,
    icon: "ti-shield-lock",
    responsibilities: [
      "Wrote technical blogs on Application Security, Red/Blue/Purple Teams, SAST/DAST, and FDA cybersecurity compliance",
      "Developed service briefs, proposals, and testing documentation for cybersecurity clients",
      "Developed landing pages focused on user experience and lead conversion",
      "Ran multi-platform social media awareness campaigns to promote safe digital practices",
    ],
  },
];

const AboutMe = () => {
  const aboutRef = useRef(null);

  return (
    <section className="about mt-4 me-lg-5" id="about" ref={aboutRef}>
      <div className="container">
        {/* Section heading */}
        <div className="section-title">
          <h2 className="title-heading hola">
            About <span>Me</span>
            <span className="line"></span>
            <h3 className="bg-text hola">My Intro</h3>
          </h2>
        </div>

        {/* Intro paragraph + stats */}
        <div className="about-intro-card">
          <p className="about-paragraph">
            I'm a <span className="green-highlight">Frontend Developer</span>{" "}
            with{" "}
            <span className="green-highlight">
              2+ years of professional experience
            </span>{" "}
            building scalable, responsive web applications. I specialize in{" "}
            <span className="green-highlight">
              React.js, Next.js, and WordPress
            </span>
            , from FinTech dashboards to client websites, with a strong focus on
            clean code, performance, and pixel-perfect UI.
          </p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <h3 className="sub-heading">
          Education
          <span className="line d-block mx-auto"></span>
        </h3>
        <div className="edu-grid">
          {educationData.map((edu, idx) => (
            <div className="info-card edu-card" key={idx}>
              <div className="card-header-row">
                <div className="card-icon-wrap">
                  <i className={`ti ${edu.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <span className="card-duration">{edu.duration}</span>
                  <h5 className="card-title-text">{edu.degree}</h5>
                  <p className="card-sub">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <h3 className="sub-heading">
          Work Experience
          <span className="line d-block mx-auto"></span>
        </h3>
        <div className="exp-grid">
          {experienceData.map((exp, idx) => (
            <div className="info-card exp-card" key={idx}>
              <div className="info-card-header">
                <div className="header-left">
                  <div className="card-icon-wrap">
                    <i className={`ti ${exp.icon}`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className="card-duration">{exp.duration}</span>
                    <h6 className="card-title-text">{exp.title}</h6>
                    <p className="card-sub">{exp.company}</p>
                  </div>
                </div>
                {exp.current && (
                  <span className="current-badge">● Current</span>
                )}
              </div>
              <div className="info-card-body">
                <ul className="resp-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
