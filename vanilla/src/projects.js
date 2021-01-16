import Project from '../model/Project.js';

const projects = [
    {
        title: 'Thisis',
        subtitle: '동아대학교 애플리케이션',
        images: [
            'iphone.png', 'logo.png'
        ],
        techList: [
            'Android', 'PHP', 'MYSQL', 'cron'
        ],
        description: `
        kakaomap을 이용하여 부산광역시 내의 cctv, 학교, 주차장 위치를 마커로 표시하였습니다.
        Koa.js를 이용해 api 서버를 만들어 주변 2KM이내 정보만 표시하였습니다
        Redux, Redux-Saga를 사용하여 위치정보를 요청하고 정리하였습니다.`
    },
    {
        title: '디스이즈2',
        subtitle: '동아대학교 애플리케이션',
        images: [
            'iphone.png', 'logo.png'
        ],
        techList: [
            'Android', 'PHP', 'MYSQL', 'cron'
        ],
        description: `
        kakaomap을 이용하여 부산광역시 내의 cctv, 학교, 주차장 위치를 마커로 표시하였습니다.
        Koa.js를 이용해 api 서버를 만들어 주변 2KM이내 정보만 표시하였습니다
        Redux, Redux-Saga를 사용하여 위치정보를 요청하고 정리하였습니다.`
    },
]
const projectList = document.querySelector('.project-list');
projects.forEach(({title, subtitle, images, techList, description}) => {
    const newProject = new Project(title, subtitle, images, techList, description);
    projectList.appendChild(newProject.getElement);
})
