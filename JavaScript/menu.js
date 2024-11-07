document.querySelector(".menu__bars").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".menu__bars--item1");
var line2__bars = document.querySelector(".menu__bars--item2");
var line3__bars = document.querySelector(".menu__bars--item3");
var container__menu = document.querySelector(".menu");

function animateBars(){
	line1__bars.classList.toggle("bars--item1");
	line2__bars.classList.toggle("bars--item2");
	line3__bars.classList.toggle("bars--item3");

	container__menu.classList.toggle("menu__active");
}