'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////
/////////////////////////////
/////////////////////////////

//Slecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(header);
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('.section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
const message = document.createElement('div');
message.classList.add(('cookie-message'));

message.innerHTML = 'We used cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function(){
    //message.remove();
    message.parentElement.removeChild(message);
  })

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //can not be logged beacause not added via script
console.log(message.style.backgroundColor); //this can be logged

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = 
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'
console.log(logo.designer); //not works on nonstandard attributes
console.log(logo.getAttribute('designer'));
logo.setAttribute('companmy', 'Bankist') //name, value

console.log(logo.src);                  //absoulut path
console.log(logo.getAttribute('src'));  //relative path

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber); //camel case instead of dash (see html)

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Do not use
//logo.className = 'jonas';