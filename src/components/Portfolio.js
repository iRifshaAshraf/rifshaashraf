import React, { useRef, useState } from "react";
import "./Portfolio.css";
import "./Title.css";

import TextUtilsImg from "./img/textUtils.PNG";
import bakeryImg from "./img/bakery-template.PNG";
import FlynanceTemplate from "./img/flynance-template.PNG";
import NewsVistaImg from "./img/news-vista.PNG";
import uiTemplate from "./img/ui-template.PNG";
import OldPortfolioImg from "./img/old-portfolio.PNG";
import LondonAppTemplate from "./img/london-appliance-solutions-template.PNG";
import adrianaTemplate from "./img/adriana-gravino-template.PNG";
import nunoTemplate from "./img/nuno-template.PNG";
import burgerResTemplate from "./img/burger-template.PNG";

const projects = [
  {
    title: "Text Utils",
    image: TextUtilsImg,
    link: "https://irifshaashraf.github.io/TextUtils-template/",
    tech: ["React.js", "Bootstrap", "HTML", "CSS"],
    note: "Text manipulation utility app",
  },
  {
    title: "Bakery",
    image: bakeryImg,
    link: "https://bakery-rifsha.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Custom bakery website template",
  },
  {
    title: "Flynance UI Template",
    image: FlynanceTemplate,
    link: "https://flynance-rifsha.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Finance UI template",
  },
  {
    title: "Adriana Gravino Template",
    image: adrianaTemplate,
    link: "https://adriana-gravino-rifsha.web.app/index.html",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Personal/portfolio template",
  },
  {
    title: "Burger Restaurant",
    image: burgerResTemplate,
    link: "https://burger-restaurant-r.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Restaurant landing page",
  },
  {
    title: "News Vista",
    image: NewsVistaImg,
    link: "https://irifshaashraf.github.io/general",
    tech: ["React.js", "Bootstrap", "REST API"],
    note: "Live news app with external API",
    isApi: true,
  },
  {
    title: "UI Template",
    image: uiTemplate,
    link: "https://ui-template-rifsha.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Modern UI landing template",
  },
  {
    title: "Old Portfolio",
    image: OldPortfolioImg,
    link: "https://irifshaashraf.github.io/Rifsha-Ashraf/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Previous personal portfolio",
  },
  {
    title: "Nuno Template",
    image: nunoTemplate,
    link: "https://nuno-rifsha.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Minimal portfolio template",
  },
  {
    title: "London Appliance Solutions",
    image: LondonAppTemplate,
    link: "https://londonappliancesolutionsrifsha.web.app/",
    tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    note: "Business website template",
  },
];

const ProjectCard = ({ title, image, link, tech, note, isApi }) => (
  <div className="portfolio-card">
    <div className="portfolio-img-wrap">
      <img src={image} alt={title} className="portfolio-img" />
      <div className="portfolio-img-overlay">
        <a href={link} target="_blank" rel="noreferrer" className="visit-btn">
          Visit Site{" "}
          <i className="fas fa-external-link-alt" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className="portfolio-card-body">
      <div className="portfolio-card-top">
        <div>
          <p className="portfolio-note">{note}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-title"
          >
            {title}
          </a>
        </div>
        {isApi && <span className="api-badge">API</span>}
      </div>
      <div className="portfolio-tags">
        {tech.map((t, i) => (
          <span className="p-tag" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const MyPortfolio = () => {
  const portfolioRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section
      className="my-portfolio mt-4 me-lg-5"
      id="my-portfolio"
      ref={portfolioRef}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            <span>My</span> Portfolio
            <span className="line"></span>
            <h3 className="bg-text hola">Templates</h3>
          </h2>
        </div>

        <p className="portfolio-intro">
          A selection of development projects, design templates, and custom
          websites built with a focus on responsive design, clean code, and
          great user experience.
        </p>

        {/* Desktop grid */}
        <div className="portfolio-grid mt-4">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="portfolio-carousel mt-4">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((proj, idx) => (
              <div className="carousel-slide" key={idx}>
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={prev}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === current ? "active" : ""}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <p className="carousel-counter">
            {current + 1} / {total}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
