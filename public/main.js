/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("\r\n\r\nconst onToggleHamberger = () =>{\r\n    const hamberger = document.querySelector('.hamburger');\r\n    const navbarContainer = document.querySelector('.navbar__container');\r\n    hamberger.addEventListener('click', ()=>{\r\n        hamberger.classList.toggle('on');\r\n        navbarContainer.classList.toggle('on');\r\n    });\r\n}\r\n\r\nconst navbarStyling = () => {\r\n  const navbar = document.querySelector('.navbar');\r\n  const arrowUp = document.querySelector('.arrow-up');\r\n  const navbarHeight = navbar.getBoundingClientRect().height;\r\n  document.addEventListener('scroll', ()=>{\r\n    if(window.scrollY > navbarHeight){\r\n      navbar.classList.add('navbar-dark');\r\n      arrowUp.classList.add('arrow-on');\r\n    }\r\n    else{\r\n      navbar.classList.remove('navbar-dark');\r\n      arrowUp.classList.remove('arrow-on');\r\n    }\r\n  });\r\n}\r\n\r\nconst scrollEvent = () =>{\r\n  const scrolltoLink = (link) =>{\r\n    const scrollTo = document.querySelector(link);\r\n    scrollTo.scrollIntoView({behavior:\"smooth\"})\r\n  }\r\n  const navbarMenu = document.querySelector('.navbar__menu');\r\n  const arrowUp = document.querySelector('.arrow-up');\r\n  navbarMenu.addEventListener('click', (e) => {\r\n    const link = e.target.dataset.link;\r\n    if(link !== null){\r\n      scrolltoLink(link);\r\n    }\r\n  })\r\n  arrowUp.addEventListener('click', () => {\r\n    scrolltoLink('#home');\r\n  });\r\n}\r\n\r\nconst underbarInterval = () =>{\r\n  const underbar = document.querySelector('.underbar');\r\n  setInterval(()=>{\r\n    underbar.style.display = underbar.style.display === 'none' ? 'block' : 'none';\r\n  }, 500)\r\n}\r\n\r\nunderbarInterval();\r\nonToggleHamberger();\r\nnavbarStyling();\r\nscrollEvent();\r\n(function() {\r\n  const homeContainer = document.querySelector('.home__container');\r\n    homeContainer.classList.add('splash');\r\n}());\n\n//# sourceURL=webpack://myintroduce/./src/index.js?");
/******/ })()
;