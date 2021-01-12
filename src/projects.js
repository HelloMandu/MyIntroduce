import Project from './model/Project.js';

const test = new Project('디스이즈', '동아대학교 애플리케이션', 'profile.jpg');
const projectList = document.querySelector('.project-list');
projectList.appendChild(test.getElement);
console.log(test);
