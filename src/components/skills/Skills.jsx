import "./skills.css";
import css from "../../assets/css3.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import mongodb from "../../assets/mongodb.svg";
import javascript from "../../assets/javascript.svg";
import figma from "../../assets/figma.svg";
import expressjs from "../../assets/expressjs.svg";

function Skills() {
  const SkillsData = [
    {
      id: 1,
      image: css,
      title: "Css",
      disc: "User Interface"
    },
    {
      id: 2,
      image: tailwindcss,
      title: "Tailwindcss",
      disc: "User Interface"
    },
    {
      id: 3,
      image: nodejs,
      title: "Nodejs",
      disc: "Web Server"
    },
    {
      id: 4,
      image: react,
      title: "React",
      disc: "Framework"
    },
    {
      id: 5,
      image: mongodb,
      title: "Mongodb",
      disc: "Database"
    },
    {
      id: 6,
      image: javascript,
      title: "Javascript",
      disc: "Interaction"
    },
    {
      id: 7,
      image: figma,
      title: "Figma",
      disc: "Design Tool"
    },
    {
      id: 8,
      image: expressjs,
      title: "Expressjs",
      disc: "Node Framework"
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
