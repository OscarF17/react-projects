import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="red" />
      <Skill skill="JavaScript" emoji="🤢" color="yellow" />
      <Skill skill="Python+Flask" emoji="🐍" color="green" />
      <Skill skill="Git+Github" emoji="🤓" color="orange" />
      <Skill skill="React" emoji="🤓" color="lightblue" />
      <Skill skill="Not much else..." emoji="😔" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
