const menuBtn = document.querySelector('.menu')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const menu = document.querySelector('.menu-wrapper')

const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const item4 = document.querySelector('.item-4')
const item5 = document.querySelector('.item-5')

const menuList = document.querySelector('.menu__list')

const questionSubtitle1 = document.querySelector('.questions__subtitle-1')
const questionSubtitle2 = document.querySelector('.questions__subtitle-2')
const questionSubtitle3 = document.querySelector('.questions__subtitle-3')
const questionSubtitle4 = document.querySelector('.questions__subtitle-4')

const questionsIco1 = document.querySelector('.questions-ico-1')
const questionsIco2 = document.querySelector('.questions-ico-2')
const questionsIco3 = document.querySelector('.questions-ico-3')
const questionsIco4 = document.querySelector('.questions-ico-4')

questionSubtitle1.addEventListener('click', () => {
  questionsIco1.classList.toggle('questions-ico--active')
})
questionSubtitle2.addEventListener('click', () => {
  questionsIco2.classList.toggle('questions-ico--active')
})
questionSubtitle3.addEventListener('click', () => {
  questionsIco3.classList.toggle('questions-ico--active')
})
questionSubtitle4.addEventListener('click', () => {
  questionsIco4.classList.toggle('questions-ico--active')
})










menuBtn.addEventListener('click', () => {
  line1.classList.toggle('line-1-actve')
  line2.classList.toggle('line-2-actve')
  line3.classList.toggle('line-3-actve')
  menu.classList.toggle('menu-active')
  item1.classList.toggle('item-active')
  item2.classList.toggle('item-active')
  item3.classList.toggle('item-active')
  item4.classList.toggle('item-active')
  item5.classList.toggle('item-active')

})


menuList.addEventListener('click', e => {
  if (e.target) {
    line1.classList.toggle('line-1-actve')
    line2.classList.toggle('line-2-actve')
    line3.classList.toggle('line-3-actve')
    menu.classList.toggle('menu-active')
    item1.classList.toggle('item-active')
    item2.classList.toggle('item-active')
    item3.classList.toggle('item-active')
    item4.classList.toggle('item-active')
    item5.classList.toggle('item-active')

  } else {
    return false
  }

})

$(document).ready(function () {
  var button = $('.btn-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});



const modalWrapper = document.querySelector('.modal-wapper')
const modalOpenBtn = document.querySelector('.application__block')
const requestBtn = document.querySelector('.request__btn')
const modalBg = document.querySelector('.modal__bg')
const closeModalBtn = document.querySelector('.close-modal__btn')

requestBtn.addEventListener('click', openModal)

modalOpenBtn.addEventListener('click', openModal)



modalBg.addEventListener('click', closeModal)
closeModalBtn.addEventListener('click', closeModal)


function openModal() {
  modalWrapper.classList.add('open-modal')
  document.body.style.overflow = 'hidden'
}
function closeModal() {
  modalWrapper.classList.remove('open-modal')
  document.body.style.overflow = 'auto'
}
