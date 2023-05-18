const tabsBtn = document.querySelectorAll('.tab');

tabsBtn.forEach(onTabClick);
function onTabClick(item) {
	item.addEventListener('click', function() {
		const tabNav = item.closest('.tab__navigation');
		const tabs = Array.from(tabNav.children);
		const contents = Array.from(tabNav.nextElementSibling.children);
		const currentTab = contents[tabs.indexOf(item)];
		tabs.forEach(elem => {
			elem.classList.remove('tab_active');
		})
		contents.forEach(elem => {
			elem.classList.remove('tab__content_active');
		})
		item.classList.add('tab_active');
		currentTab.classList.add('tab__content_active');
	})
}