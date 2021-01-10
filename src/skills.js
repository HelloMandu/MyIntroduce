import Skill from "./model/Skill.js";

const getSkills = () => {
    return fetch("../asset/skills.json")
        .then((response) => response.json())
        .then((json) => json.skills);
};

const skillContainer = document.querySelector(".skill-container");

getSkills().then((skills) => {
    const skillList = skills.map(
        ({ title, content, color, percent }) =>
            new Skill(title, content, color, percent)
    );
    skillList.forEach((skill) =>
        skillContainer.appendChild(skill.createSkill())
    );
});
