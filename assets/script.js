const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var index = 0;

const arrowArrowLeft = document.querySelector('.arrow_left');
const arrowArrowRight = document.querySelector('.arrow_right');
const imageCarrousel = document.querySelector('.banner-img');
const imagetagLine = document.querySelector('#tagLine');

const dots = document.querySelectorAll('.dot');

function slide(direction) {
	dots[index].classList.toggle('dot_selected');
	index = index + direction;

	if (index < 0) {
		index = dots.length - 1;
	} else if (index > (dots.length - 1)) {
		index = 0;
	}

	dots[index].classList.toggle('dot_selected');
	const currentSlide = slides[index];
	imageCarrousel.src = `./assets/images/slideshow/${currentSlide.image}`;
	imagetagLine.innerHTML = `${currentSlide.tagLine}`;
}

arrowArrowLeft.addEventListener("click", function(event) {
	slide(-1);
});

arrowArrowRight.addEventListener("click", function(event) {
	slide(1);
});