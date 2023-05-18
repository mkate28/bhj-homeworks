const menuLinks = Array.from(document.querySelectorAll('.menu__link'))
const menu = Array.from(document.querySelectorAll('.menu_sub'));

menu.forEach(item => {
	const link = item.closest('li').querySelector('.menu__link');
	const subMenu = link.closest('.menu__item').querySelector('.menu_sub');
	link.onclick = () => {
		menu.forEach(el => {
			if (el !== item) {
				el.classList.remove('menu_active');
			}
		})
		subMenu.classList.toggle('menu_active');
		return false;
	}
})