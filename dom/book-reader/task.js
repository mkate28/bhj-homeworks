const book = document.querySelector('#book');
const fontButtons = document.querySelectorAll('.font-size');
const colorButtons = document.querySelectorAll('.color');

fontButtons.forEach(btn => {
	btn.addEventListener('click', function(event) {
		event.preventDefault();
		fontButtons.forEach(btn => {
			btn.classList.remove('font-size_active');
		})
		btn.classList.add('font-size_active');
		if (btn.dataset.size === 'small') {
			book.classList.add('book_fs-small');
		} else if (btn.dataset.size === 'big') {
			book.classList.remove('book_fs-small');
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	})
})

colorButtons.forEach(btn => {
	btn.addEventListener('click', function(event) {
		event.preventDefault();
		colorButtons.forEach(btn => {
			btn.classList.remove('color_active');
		})
		if (btn.tagName === 'A') btn.classList.add('color_active');

		if (btn.dataset.textColor === 'black') {
			book.classList.remove('book_color-gray');
			book.classList.remove('book_color-whitesmoke');
			book.classList.add('book_color-black');
		} else if (btn.dataset.textColor === 'gray') {
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-whitesmoke');
			book.classList.add('book_color-gray');
		} else if (btn.dataset.textColor === 'whitesmoke') {
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-gray');
			book.classList.add('book_color-whitesmoke');
		}

		if (btn.dataset.bgColor === 'black') {
			book.classList.remove('book_bg-gray');
			book.classList.remove('book_bg-white');
			book.classList.add('book_bg-black');
		} else if (btn.dataset.bgColor === 'gray') {
			book.classList.remove('book_bg-white');
			book.classList.remove('book_bg-black');
			book.classList.add('book_bg-gray');
		} else if (btn.dataset.bgColor === 'white') {
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-gray');
			book.classList.add('book_bg-white');
		}
	})
})