import React, { useRef } from "react";
import "./Portfolio.css";

// Images
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

// Portfolio Data
const projects = [
  {
    title: "Text Utils",
    image: TextUtilsImg,
    link: "https://irifshaashraf.github.io/TextUtils-template/",
    tech: "HTML, CSS, Bootstrap and React.js",
    note: "This is the custom site.",
  },
  {
    title: "Bakery",
    image: bakeryImg,
    link: "https://bakery-rifsha.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "UI Template",
    image: FlynanceTemplate,
    link: "https://flynance-rifsha.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "Adriana Gravino Template",
    image: adrianaTemplate,
    link: "https://adriana-gravino-rifsha.web.app/index.html",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "Burger Template",
    image: burgerResTemplate,
    link: "https://burger-restaurant-r.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "News Vista",
    image: NewsVistaImg,
    link: "https://irifshaashraf.github.io/general",
    tech: "HTML, CSS, Bootstrap, and React.js",
    note: "External API Integrated",
  },
  {
    title: "UI Template",
    image: uiTemplate,
    link: "https://ui-template-rifsha.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "Portfolio",
    image: OldPortfolioImg,
    link: "https://irifshaashraf.github.io/Rifsha-Ashraf/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom Portfolio.",
  },
  {
    title: "Nuno Template",
    image: nunoTemplate,
    link: "https://nuno-rifsha.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
  {
    title: "London Appliance Template",
    image: LondonAppTemplate,
    link: "https://londonappliancesolutionsrifsha.web.app/",
    tech: "HTML, CSS, Bootstrap and JavaScript",
    note: "This is the custom site.",
  },
];

const MyPortfolio = () => {
  const portfolioRef = useRef(null);

  return (
    <section className="my-portfolio" id="my-portfolio" ref={portfolioRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            <span>My</span> Portfolio
            <span className="line"></span>
            <h3 className="bg-text hola">Templates</h3>
          </h2>
        </div>

        <p className="text-center">
          Within this portfolio, a selection of work is showcased, encompassing
          development projects, design samples, and writing examples. The focus
          lies in creating solutions that are not only functional but also
          visually appealing and user-friendly. For those interested in
          collaboration or with inquiries, please feel free to reach out without
          hesitation.
        </p>

        <div className="site-template mt-5">
          <div className="templates">
            <div className="row">
              {[0, 1].map((col) => (
                <div className="col-md-6" key={col}>
                  {projects
                    .filter((_, index) => index % 2 === col)
                    .map(({ title, image, link, tech, note }, idx) => (
                      <div className="template-1" key={idx}>
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                src={image}
                                className="img-fluid card-img-top"
                                alt={title}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <a href={link} target="_blank" rel="noreferrer">
                                  <h5 className="card-title">{title}</h5>
                                </a>
                                <p className="card-text">
                                  {note} <br />
                                  <b>Technology Used:</b> {tech}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
