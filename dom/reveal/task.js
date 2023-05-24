const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
	reveals.forEach(elem => {
		if (isVisible(elem)) {
			elem.classList.add('reveal_active');
		} else {
			elem.classList.remove('reveal_active');
		}
	})
})

function isVisible(el) {
	const {top, bottom} = el.getBoundingClientRect();
	if (bottom < 0 || top > window.innerHeight) {
		return false;
	}
	return true;
}