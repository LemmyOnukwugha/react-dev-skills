import "../App.css";

function SkillListItem({ skill, level }) {
  return (
    <div className="SkillListItem">
      {skill} <span className="level">{level}</span>
    </div>
  );
}

export default SkillListItem;
