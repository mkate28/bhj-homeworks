document.querySelectorAll('.rotator').forEach(rotator => {
	const items = rotator.querySelectorAll('.rotator__case');
	setInterval(() => {
		let index = Math.floor(Math.random() * items.length);
		for (let item of items) {
			item.classList.remove('rotator__case_active');
		}
		items[index].classList.add('rotator__case_active');
		items[index].style.color = items[index].dataset.color;
	}, 1000);
})