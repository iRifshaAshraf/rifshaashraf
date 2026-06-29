import React from "react";
import "./Skills.css";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandGithub,
  IconBrandWordpress,
  IconBrandVercel,
  IconBrandShopee,
  IconServer2,
  IconBrandGoogle,
  IconCloud,
  IconLayoutDashboard,
  IconComponents,
  IconRipple,
} from "@tabler/icons-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: <IconBrandReact size={22} />,
    skills: [
      { name: "React.js", icon: <IconBrandReact size={28} /> },
      { name: "Next.js", icon: <IconBrandNextjs size={28} /> },
      { name: "TypeScript", icon: <IconBrandTypescript size={28} /> },
      { name: "JavaScript", icon: <IconBrandJavascript size={28} /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind size={28} /> },
    ],
  },
  {
    category: "UI Libraries & Animation",
    icon: <IconComponents size={22} />,
    skills: [
      { name: "Material UI", icon: <IconLayoutDashboard size={28} /> },
      { name: "ShadCN", icon: <IconComponents size={28} /> },
      { name: "GSAP", icon: <IconRipple size={28} /> },
    ],
  },
  {
    category: "Backend",
    icon: <IconBrandNodejs size={22} />,
    skills: [
      { name: "Node.js", icon: <IconBrandNodejs size={28} /> },
      { name: "Express.js", icon: <IconServer2 size={28} /> },
    ],
  },
  {
    category: "Database",
    icon: <IconBrandMongodb size={22} />,
    skills: [{ name: "MongoDB", icon: <IconBrandMongodb size={28} /> }],
  },
  {
    category: "Tools & Platforms",
    icon: <IconBrandGit size={22} />,
    skills: [
      { name: "Git", icon: <IconBrandGit size={28} /> },
      { name: "GitHub", icon: <IconBrandGithub size={28} /> },
      { name: "WordPress", icon: <IconBrandWordpress size={28} /> },
      { name: "Shopify", icon: <IconBrandShopee size={28} /> },
      { name: "GoDaddy CMS", icon: <IconCloud size={28} /> },
      { name: "Vercel", icon: <IconBrandVercel size={28} /> },
    ],
  },
  {
    category: "AI & Integrations",
    icon: <IconBrandGoogle size={22} />,
    skills: [{ name: "Google Dialogflow ES", icon: <IconBrandGoogle size={28} /> }],
  },
];

const Skills = () => {
  return (
    <section className="skills-section me-lg-5" id="skills">
      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            Technical <span>Skills</span>
            <span className="line"></span>
            <h3 className="bg-text hola">Skills</h3>
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-header">
                <span className="skill-category-icon">{cat.icon}</span>
                <h3 className="skill-category">{cat.category}</h3>
              </div>

              <div className="skill-items">
                {cat.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-icon-box">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;