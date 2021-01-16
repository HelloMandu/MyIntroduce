"use strict";

const underbarInterval = () => {
    const underbar = document.querySelector(".underbar");
    setInterval(() => {
        const opacity = underbar.style.opacity;
        underbar.style.opacity = opacity === '0' ? '1' : '0';
    }, 500);
};

underbarInterval();
