'use strict';

const onToggleHamberger = () =>{
    const hamberger = document.querySelector('.hamburger');
    const navbarContainer = document.querySelector('.navbar__container');
    hamberger.addEventListener('click', ()=>{
        hamberger.classList.toggle('on');
        navbarContainer.classList.toggle('on');
    });
}

const navbarStyling = () => {
  const navbar = document.querySelector('.navbar');
  const arrowUp = document.querySelector('.arrow-up');
  const navbarHeight = navbar.getBoundingClientRect().height;
  document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
      navbar.classList.add('navbar-dark');
      arrowUp.classList.add('arrow-on');
    }
    else{
      navbar.classList.remove('navbar-dark');
      arrowUp.classList.remove('arrow-on');
    }
  });
}

const scrollEvent = () =>{
  const scrolltoLink = (link) =>{
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"})
  }
  const navbarMenu = document.querySelector('.navbar__menu');
  const arrowUp = document.querySelector('.arrow-up');
  navbarMenu.addEventListener('click', (e) => {
    const link = e.target.dataset.link;
    if(link !== null){
      scrolltoLink(link);
    }
  })
  arrowUp.addEventListener('click', () => {
    scrolltoLink('#home');
  });
}

const underbarInterval = () =>{
  const underbar = document.querySelector('.underbar');
  setInterval(()=>{
    underbar.style.display = underbar.style.display === 'none' ? 'block' : 'none';
  }, 500)
}

underbarInterval();
onToggleHamberger();
navbarStyling();
scrollEvent();
(function() {
  const homeContainer = document.querySelector('.home__container');
    homeContainer.classList.add('splash');
}());