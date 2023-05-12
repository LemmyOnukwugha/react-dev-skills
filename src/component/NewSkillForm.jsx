import { useState } from "react";
import "../App.css";

function NewSkillForm({ skills, setSkills }) {
  const [skill, setSkill] = useState({
    name: "",
    level: 1,
  });

  function handleChange(e) {
    setSkill((skill) => {
      return { ...skill, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSkills((skills) => {
      return [...skills, skill];
    });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>Skill: </label>
      <input type="text" onChange={handleChange} name="name" />
      <label>level: </label>
      <select value={1} onChange={handleChange} name="level">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
export default NewSkillForm;
