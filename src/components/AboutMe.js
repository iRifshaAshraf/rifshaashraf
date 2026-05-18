import React, { useRef } from "react";
import "./AboutMe.css";
import "./Title.css";

const educationData = [
  {
    duration: "Oct 2020 - June 2024",
    degree: "Bachelors in Computer Science",
    institution: "Iqra University",
  },
];

const experienceData = [
  {
    duration: "Oct 2021 - Present",
    title: "Frontend Developer",
    company: "Freelance",
    responsibilities: [
      "Developed e-commerce solutions and corporate websites as a freelance developer.",
      "Implemented responsive and user-friendly interfaces to ensure optimal experience across all devices.",
      "Worked with HTML5, CSS3, Bootstrap 4/5, JavaScript, jQuery, React JS, Next JS, Material UI, PHP/Laravel, WordPress, and Shopify.",
      "Converted PSD and Figma designs into pixel-perfect, well-structured HTML.",
      "Ensured cross-browser compatibility and maintained clean, reusable frontend code.",
      // "Proficiently developed e-commerce functionality for online stores, ensuring optimized checkout flows and performance.",
      // "Frontend skills: HTML5, CSS3, Bootstrap 4/5, JavaScript, jQuery, React.js, Material UI, Laravel, and WordPress.",
      // "Flawless user experience on all devices through responsive design.",
      // "Converted PSD/Figma designs to HTML seamlessly pixel-perfect websites.",
      // "Integrated third-party APIs (e.g., payment gateways, shipping, CMS) to extend functionality and improve user interaction.",
      "Collaborated with clients to gather requirements and deliver customized, scalable UI solutions.",
      "Used Git for version control and managed projects independently to meet tight deadlines.",
    ],
  },
  {
    duration: "Feb 2026 - May 2026",
    title: "Full Stack Developer",
    company: "JZTech",
    responsibilities: [
      "Developing and maintaining front-end and back-end web applications ",
      // "Designing and integrating RESTful APIs; managing databases and server-side logic ",
      "Building and customizing WordPress websites to meet client design and functionality requirements ",
      "Ensuring application performance, security, and scalability across all layers of the stack ",
      "Debugging, testing, and resolving issues; collaborating closely with UI/UX designers and developers",
      "Collaborated with clients to gather requirements and deliver customized, scalable UI solutions",
      "Maintaining version-controlled code using Git; participating in deployment and release processes",
    ],
  },
  {
    duration: "May 2024 - January 2026",
    title: "Frontend Developer",
    company: "Finnovator",
    responsibilities: [
      "Built scalable FinTech and e-commerce platforms using React.js, Next.js, Material-UI, and ShadCN",
      "Integrated RESTful APIs and implemented Redux Toolkit for optimized state and data management",
      "Customized WordPress websites and developed a villa booking site via GoDaddy CMS",
      "Refactored and optimized codebase to improve scalability, readability, and performance",
      // "Built scalable FinTech and e-commerce platforms using React.js, Next.js, Material-UI, ShadCN, and GSAP for smooth animations.",
      // "Integrated APIs and optimized data handling using efficient data structures for high performance.",
      // "Implemented Redux and Jotai for flexible state management, and used Git for version control to support collaborative development.",
      // "Collaborated with cross-functional teams to design intuitive user interfaces and enhance overall app functionality.",
      // "Diagnosed and resolved complex issues to ensure consistent application performance.",
      // "Followed Agile methodologies for sprint planning and timely delivery.",
      // "Refactored code regularly to improve scalability, readability, and maintainability.",
    ],
  },
  {
    duration: "July 2022 - Feb 2024",
    title: "Cybersecurity Content Creator",
    company: "ioSENTRIX",
    responsibilities: [
      "Wrote technical blogs on Application Security, Red/Blue/Purple Teams, SAST/DAST, and FDA cybersecurity compliance",
      "Developed service briefs, proposals, and testing documentation for cybersecurity clients",
      "Developed landing pages focused on user experience and lead conversion",
      "Ran multi-platform social media awareness campaigns to promote safe digital practice",
      // "Wrote blogs on topics like Application Security, Red/Blue/Purple Teams, SAST/DAST, and FDA cybersecurity compliance.",
      // "Developed technical content including service briefs, proposals, and testing documentation.",
      // "Created cybersecurity infographics and awareness posts for social media; managed multi-platform content with consistent, timely updates.",
      // "Designed landing pages focused on user experience and lead conversion.",
      // "Ran awareness campaigns to promote safe digital practices and boost engagement.",
    ],
  },
];

const AboutMe = () => {
  const aboutRef = useRef(null);

  return (
    <section className="about mt-4 me-lg-5" id="about" ref={aboutRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            About <span>Me</span>
            <span className="line"></span>
            <h3 className="bg-text hola">My Intro</h3>
          </h2>
        </div>

        <div className="about-content mt-4">
          <div className="about-text-content text-center">
            <p className="mb-4 fs-5">
              I'm a Frontend Developer with 2+ years of professional experience
              building scalable web applications. I specialize in React.js,
              Next.js, WordPress, and SHopify from FinTech dashboards to client
              websites with a strong focus on clean code, performance, and
              pixel-perfect UI.
            </p>
            {/* <p className="mb-4 fs-5">
              A self-motivated Computer Science graduate with 1 year and 3
              months of professional experience in frontend development.
              Passionate about designing and developing innovative,
              user-friendly applications that balance functionality and
              aesthetics. Strong foundation in computer science and programming,
              with proven ability to build high-quality, efficient, and scalable
              software solutions. Dedicated to solving real-world problems
              through clean code, collaboration, and continuous learning.
            </p> */}

            <h3 className="my-4 position-relative">
              Education
              <span className="line d-block mx-auto"></span>
            </h3>
            <div className="education d-flex justify-content-center flex-wrap gap-4 mb-5">
              {educationData.map((edu, idx) => (
                <div
                  className="card text-white"
                  key={idx}
                  style={{ width: "26rem", height: "10rem" }}
                >
                  <div className="card-header fw-bold">{edu.duration}</div>
                  <div className="card-body p-3">
                    <h5 className="card-title fw-semibold">{edu.degree}</h5>
                    <p className="card-text">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="my-4 position-relative">
              Work Experience
              <span className="line d-block mx-auto"></span>
            </h3>
            <div className="experience">
              <div className="row g-4 justify-content-center">
                {experienceData.map((exp, idx) => (
                  <div className="col-lg-5 col-xl-6" key={idx}>
                    <div className="card text-white ">
                      <div className="card-header fw-bold">{exp.duration}</div>
                      <div className="card-body p-4">
                        <h6 className="card-title fw-semibold">{exp.title}</h6>
                        <p className="card-text mb-2">
                          <strong>{exp.company}</strong>
                        </p>
                        <p className="mt-3 mb-2 ">
                          Responsibilities:
                        </p>
                        <ul className="ps-4 mb-0">
                          {exp.responsibilities.map((item, index) => (
                            <li key={index} className="mb-2 fs-6 lh-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
