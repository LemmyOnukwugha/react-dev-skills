import SkillListItem from "./SkillListItem";

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill, idx) => (
        <SkillListItem
          skill={skill.name}
          level={skill.level}
          key={idx}
        ></SkillListItem>
      ))}
    </div>
  );
}

export default SkillList;
