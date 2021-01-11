"use strict";

const onToggleHamberger = () => {
    const hamberger = document.querySelector(".hamburger");
    const navbar = document.getElementById("header");
    hamberger.addEventListener("click", () => {
        hamberger.classList.toggle("on");
        navbar.classList.toggle("on");
    });
};

const navbarStyling = () => {
    const navbar = document.getElementById("header");
    const arrowUp = document.querySelector(".arrow-up");
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add("active");
            arrowUp.classList.add("arrow-on");
        } else {
            navbar.classList.remove("active");
            arrowUp.classList.remove("arrow-on");
        }
    });
};

const scrollEvent = () => {
    const scrolltoLink = (link) => {
        const scrollTo = document.getElementById(link);
        scrollTo.scrollIntoView({ behavior: "smooth" });
    };
    const navbarMenu = document.querySelector(".navbar-menu");
    const arrowUp = document.querySelector(".arrow-up");
    navbarMenu.addEventListener("click", (e) => {
        const link = e.target.dataset.link;
        if (link) {
            scrolltoLink(link);
        }
    });
    arrowUp.addEventListener("click", () => {
        scrolltoLink("home");
    });
};

onToggleHamberger();
navbarStyling();
scrollEvent();
