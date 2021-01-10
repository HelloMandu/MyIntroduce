const sectionIdList = ["home", "about", "skills", /*"work",*/ "contact"];
const sectionList = sectionIdList.map((id) => document.getElementById(id));
const navList = sectionIdList.map((id) =>
    document.querySelector(`[data-link="${id}"]`)
);

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

let selectedNavItem = navList[0];

const activeNavItem = (selected) => {
    selectedNavItem.classList.remove("active");
    selectedNavItem = selected;
    selectedNavItem.classList.add("active");
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        const { isIntersecting, intersectionRatio, boundingClientRect } = entry;
        if (!isIntersecting && intersectionRatio > 0) {
            const { id } = entry.target;
            const index = sectionIdList.indexOf(id);
            const selectedNavIndex = boundingClientRect.y < 0 ? index + 1 : index - 1;
            activeNavItem(navList[selectedNavIndex]);
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sectionList.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
    if(window.scrollY === 0){
        selectedNavItem.classList.remove("active");
    }
});
