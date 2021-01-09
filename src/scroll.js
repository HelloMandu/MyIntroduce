"use strict";

const onToggleHamberger = () => {
    const hamberger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    hamberger.addEventListener("click", () => {
        hamberger.classList.toggle("on");
        navbar.classList.toggle("on");
    });
};

const navbarStyling = () => {
    const navbar = document.querySelector(".navbar");
    // const arrowUp = document.querySelector(".arrow-up");
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add("navbar-dark");
            // arrowUp.classList.add("arrow-on");
        } else {
            navbar.classList.remove("navbar-dark");
            // arrowUp.classList.remove("arrow-on");
        }
    });
};

const scrollEvent = () => {
    const scrolltoLink = (link) => {
        const scrollTo = document.getElementById(link);
        scrollTo.scrollIntoView({ behavior: "smooth" });
        // scrollTo.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    };
    const navbarMenu = document.querySelector(".navbar-menu");
    // const arrowUp = document.querySelector(".arrow-up");
    navbarMenu.addEventListener("click", (e) => {
        const link = e.target.dataset.link;
        if (link !== null) {
            scrolltoLink(link);
        }
    });
    // arrowUp.addEventListener("click", () => {
    //     scrolltoLink("#home");
    // });
};

onToggleHamberger();
navbarStyling();
scrollEvent();
