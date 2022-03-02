let menubtn = document.querySelector('.menu-btn');
let menuoption = document.querySelector('.menu-options');
let navclose = document.querySelector('.nav-cross > i');

menubtn.addEventListener('click', () => {
	menuoption.style.left = '4%';
});

navclose.addEventListener('click', () => {
	menuoption.style.left = '-105%';
});
