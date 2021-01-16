import Skill from "../model/Skill.js";

const skills = [
    {
        title: "HTML",
        content:
            "검색엔진최적화(SEO)와 DOM의 대한 이해를 바탕으로 꼼꼼한 시멘틱 마크업을 작성합니다. HTML문서를 구조화하여 DOM에 접근할 수 있도록 합니다.",
        color: "orangered",
        percent: 90,
    },
    {
        title: "CSS",
        content:
            "적용 우선순위, 선택자 등 기본개념을 이해하고 HTML 내에 스타일을 지정합니다. 디자인 시안을 보고 레이아웃을 설계하고 퍼블리싱 할 수 있으며 미디어 쿼리를 이용한 반응형 스타일링과 애니메이션을 구현할 수 있습니다.",
        color: "rgb(0, 162, 255)",
        percent: 70,
    },
    {
        title: "SCSS",
        content:
            "CSS 전처리기(CSS Preprocessor)를 이용해 기존 CSS 좀 더 세련되게 작성하여 생산성을 높일 수 있습니다. 변수, 함수를 사용하여 재사용성을 높이고 CSS Module을 통해 중첩클래스를 방지할 수 있습니다. ",
        color: " rgb(235, 116, 185)",
        percent: 70,
    },
    {
        title: "JavaScript",
        content:
            "클로저, 호이스팅, 이벤트등 자바스크립트의 기본 개념을 숙지하고 있으며 ES6기반의 모던 자바스크립트 문법을 사용합니다., Promise, async/await을 이해하고 백엔드와 통신해 웹페이지를 동적으로 제어할 수 있습니다.",
        color: "darkorange",
        percent: 90,
    },
    {
        title: "TypeScript",
        content:
            "타입스크립트의 타입, interface, Class등 기본개념을 이해하고 자바스크립트를 타입스크립트로 작성할 수 있습니다. 리액트 프로젝트에 적용할 수 있으며 재사용성과 생산성을 높이기 위해 노력중입니다.",
        color: " rgb(0, 132, 255)",
        percent: 40,
    },

    {
        title: "React.js",
        content:
            "Hooks기반의 함수형 컴포넌트를 주로 사용합니다. React 생명주기에 대해 이해하고 있고 상태관리를 통해 UI동작을 제어하고 다룰 수 있습니다. Custom Hook과 재사용성이 높은 컴포넌트를 작성하여 재사용성을 높이고 유지보수가 용이하게 작성하는 것을 좋아합니다.",
        color: " rgb(0, 195, 255)",
        percent: 80,
    },
    {
        title: "Redux",
        content:
            "Redux의 action, store, reducer 등 기본 개념을 숙지하고 있으며 global 상태를 관리할 수 있습니다. Ducks패턴을 사용해 작성하며, 비동기 작업을 처리할 때 주로 redux-saga를 이용합니다.", 
        color: "rgb(214, 113, 240)",
        percent: 60,
    },
    {
        title: "Express.js",
        content:
            "Express.js를 통해 API서버 및 웹서비스를 개발할 수 있습니다. REST API를 활용하여 프론트엔드와 함께 협업하여 서비스를 개발 할 수 있습니다.",
        color: " rgb(4, 179, 106)",
        percent: 60,
    },
    {
        title: "C, C++",
        content:
            "C와 C++으로프로그래밍의 기반을 다졌습니다. 프로그래밍 문법과 시간, 공간복잡도 분석 등의 기본지식을 충분히 이해하였으며 당면한 문제에 맞게 자료구조와 알고리즘을 지식을 적용하여 문제 해결 능력을 갖추었습니다.",
        color: "rgb(13, 158, 255)",
        percent: 80,
    },
    {
        title: "MySQL",
        content:
            "관계형 데이터베이스를 이해하고 테이블 간의 관계를 정의하고 생성할 수 있습니다. SQL문을 이용해 CRUD작업을 할 수 있으며 프로그래밍 언어와 결합해 MYSQL을 정의, 조작, 제어할 수 있습니다.",
        color: "rgb(4, 169, 180)",
        percent: 60,
    },
    {
        title: "MongoDB",
        content:
            "관계형 데이터베이스와 NoSQL의 차이점을 이해하고 JSON객체로 표현된 질의문을 사용할 수 있습니다. mongoose를 이용해 Node.js에서 데이터베이스를 정의, 조작, 제어할 수 있습니다.",
        color: "rgb(4, 133, 68)",
        percent: 40,
    },
    {
        title: "Git, Github",
        content:
            "형상 관리 도구 Git을 이용한 프로젝트를 진행해 버전관리를 할 수 있습니다. Github repository를 이용해 프로젝트 소스 코드를 관리하고 brach, merge, commit 등 기본적인 명령어를 숙지해, 팀원들과 협업시 활용할 수 있습니다.",
        color: "#444",
        percent: 60,
    },
];
const progressAnimation = () => {
    if (!progressBarList.length) {
        return;
    }
    progressBarList.forEach((progressBar, index) => {
        const posFromTop = progressBar.getBoundingClientRect().top;
        if (window.innerHeight > posFromTop) {
            progressBar.style.width = percentList[index];
            progressBar.children[0].style.opacity = 1;
        }
    });
};

const skillContainer = document.querySelector(".skill-container");
const progressBarList = [];
const percentList = [];

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

document.addEventListener("scroll", progressAnimation);
