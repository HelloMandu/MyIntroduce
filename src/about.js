"use strict";

const underbarInterval = () => {
    const underbar = document.querySelector(".underbar");
    setInterval(() => {
        underbar.style.display =
            underbar.style.display === "none" ? "block" : "none";
    }, 500);
};

underbarInterval();
