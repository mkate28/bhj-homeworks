document.querySelectorAll('.dropdown').forEach(function(wrapper) {
	const dropBtn = wrapper.querySelector('.dropdown__value');
	const dropList = wrapper.querySelector('.dropdown__list');
	const dropListItems = wrapper.querySelectorAll('.dropdown__item');

	dropBtn.addEventListener('click', function() {
		dropList.classList.toggle('dropdown__list_active');
	})

	dropListItems.forEach(function(item) {
		item.addEventListener('click', function() {
			dropBtn.textContent = this.textContent;
			dropList.classList.remove('dropdown__list_active');
		})
		item.onclick = () => {
			return false;
		}
	})
})