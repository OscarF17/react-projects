import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  var intro =
    "Full-stack developer in the making. I enjoy learning new technologies and languages, playing videogames and reading books and manga.";
  var name = "Oscar Flores";
  return (
    <div className="card">
      <Avatar image="./avatar.jpg" />
      <div className="data">
        <Intro name={name} intro={intro} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.image} alt="Avatar" className="avatar"></img>;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/*
      <Skill skill="HTML+CSS" emoji="💪" color="red" />
      <Skill skill="JavaScript" emoji="🤢" color="yellow" />
      <Skill skill="Python+Flask" emoji="🐍" color="green" />
      <Skill skill="Git+Github" emoji="🤓" color="orange" />
      <Skill skill="React" emoji="🤓" color="lightblue" />
      <Skill skill="Not much else..." emoji="😔" color="grey" />
      */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  const emojiDict = {
    beginner: "👶",
    advanced: "💪",
    intermediate: "👍",
  };

  const emoji = emojiDict[level];
  const foundEmoji = emoji !== undefined;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{foundEmoji && emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
