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
  IconBrandShopee,
  IconBrandVercel,
} from "@tabler/icons-react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <IconBrandReact size={18} /> },
      { name: "Next.js", icon: <IconBrandNextjs size={18} /> },
      { name: "TypeScript", icon: <IconBrandTypescript size={18} /> },
      { name: "JavaScript", icon: <IconBrandJavascript size={18} /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind size={18} /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <IconBrandNodejs size={18} /> },
      { name: "Express.js", icon: null },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "MongoDB", icon: <IconBrandMongodb size={18} /> }],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <IconBrandGit size={18} /> },
      { name: "GitHub", icon: <IconBrandGithub size={18} /> },
      { name: "WordPress", icon: <IconBrandWordpress size={18} /> },
      { name: "Shopify", icon: null },
      { name: "Vercel", icon: <IconBrandVercel size={18} /> },
    ],
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
              <h3 className="skill-category">{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span className="skill-tag" key={j}>
                    {skill.icon && (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    {skill.name}
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

export default Skills;
