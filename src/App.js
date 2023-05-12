import SkillList from "./component/SkillList.jsx";
import NewSkillForm from "./component/NewSkillForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React dev Skills</h1>
        <SkillList skills={skills} />
        <NewSkillForm skills={skills} setSkills={setSkills} />
      </header>
    </div>
  );
}

export default App;
