const modal = document.querySelector('#modal_main');
const successModal = document.querySelector('#modal_success');
const closeModals = document.querySelectorAll('.modal__close');
const successBtn = document.querySelector('.show-success');

window.onload = () => {
	modal.classList.add('modal_active');
}

for (let element of closeModals) {
	element.onclick = () => {
		modal.classList.remove('modal_active');
		successModal.classList.remove('modal_active');
	}
}

successBtn.onclick = () => {
	modal.classList.remove('modal_active');
	successModal.classList.add('modal_active');
}