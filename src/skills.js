import Skill from "./model/Skill.js";

const getSkills = () => {
    return fetch("../data/skills.json")
        .then((response) => response.json())
        .then((json) => json.skills);
};

const progressAnimation = () =>{
    if(!progressBarList.length){
        return;
    }
    progressBarList.forEach((progressBar, index) => {
        const posFromTop = progressBar.getBoundingClientRect().top;
        if (window.innerHeight > posFromTop) {
            progressBar.style.width = percentList[index];
        }
    });
}

const skillContainer = document.querySelector(".skill-container");
const progressBarList = [];
const percentList = [];

getSkills().then((skills) => {
    const skillList = skills.map(
        ({ title, content, color, percent }) =>
            new Skill(title, content, color, percent)
    );
    skillList.forEach((skill) => {
        const skillElement = skill.getElement;
        const progressBar = skill.getProgressBar;
        const percent = skill.getPercent;
        skillContainer.appendChild(skillElement);
        progressBarList.push(progressBar);
        percentList.push(`${percent}%`);
    });
});

document.addEventListener('scroll', progressAnimation);