'use strict';
const onToggleHamberger = () =>{
    const hamberger = document.querySelector('.hamburger');
    const navbarContainer = document.querySelector('.navbar__container');
    hamberger.addEventListener('click', ()=>{
        hamberger.classList.toggle('on');
        navbarContainer.classList.toggle('on');
    });
}

const isTop = () =>{

}

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
}

window.addEventListener('scroll', (e) => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


onToggleHamberger();
