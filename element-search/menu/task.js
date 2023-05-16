const menu = Array.from(document.querySelectorAll('.menu_sub'));

menu.forEach(item => {
	const menuLink = item.closest('li').querySelector('.menu__link');
	menuLink.onclick = () => {
		menu.forEach(elem => {
			if (elem.closest('.menu_main') === item.closest('.menu_main')) {
				elem.classList.remove('menu_active');
			}
		})
		item.classList.add('menu_active');
		return false;
	}
})