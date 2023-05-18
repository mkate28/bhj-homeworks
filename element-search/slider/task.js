const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = document.querySelectorAll('.slider__dot');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

arrowPrev.addEventListener('click', showPrevSlide);
arrowNext.addEventListener('click', showNextSlide);

slides.forEach((slide, index) => {
	slide.dataset.index = index;
})

function showPrevSlide() {
	let current = slides.indexOf(document.querySelector('.slider__item_active'));
	currentSlide(current);
	let active = current === 0 ? slides.length - 1 : current - 1;
	changeSlide(active);
}

function showNextSlide() {
	let current = slides.indexOf(document.querySelector('.slider__item_active'));
	currentSlide(current);
	let active = (current + 1 === slides.length) ? 0 : current + 1;
	changeSlide(active);
}

function showSlide(index) {
	const slide = document.querySelector(`[data-index="${index}"]`);
	slide.classList.add('slider__item_active');
}

function currentSlide(index) {
	const slide = document.querySelector(`[data-index="${index}"]`);
	slide.classList.remove('slider__item_active');
}

function changeSlide(index) {
	showSlide(index);
	activeSlide(index);
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
	}
})