const swiper = new Swiper(".swiper", {
    effect:'fade',
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click',() => {
  menu.classList.toggle('menu__list--active')
})