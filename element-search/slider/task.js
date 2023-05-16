const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
let counter = 0;

arrowPrev.addEventListener('click', showPrevSlide);
arrowNext.addEventListener('click', showNextSlide);

slides.forEach((slide, index) => {
	slide.dataset.index = index;
})

function showPrevSlide() {
	currentSlide(counter);
	counter = counter === 0 ? slides.length - 1 : counter - 1;
	changeSlide();
}

function showNextSlide() {
	currentSlide(counter);
	counter = (counter + 1 === slides.length) ? 0 : counter + 1;
	changeSlide();
}

function showSlide(index) {
	const slide = document.querySelector(`[data-index="${index}"]`);
	slide.classList.add('slider__item_active');
}

function currentSlide(index) {
	const slide = document.querySelector(`[data-index="${index}"]`);
	slide.classList.remove('slider__item_active');
}

function changeSlide() {
	showSlide(counter);
	activeSlide(counter);
}

function activeSlide(index) {
	dots.forEach(item => item.classList.remove('slider__dot_active'));
	dots[index].classList.add('slider__dot_active');
}

dots.forEach((dot, index) => {
	dot.onclick = function() {
		slides.forEach(elem => elem.classList.remove('slider__item_active'));
		showSlide(index);
		activeSlide(index);
		counter = index;
	}
})