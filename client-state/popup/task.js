const modal = document.querySelector('#subscribe-modal');
const closeModal = document.querySelector('.modal__close');

window.onload = () => {
   if (!getCookie('closed')) {
      modal.classList.add('modal_active');
   } 
}

closeModal.onclick = () => {
   modal.classList.remove('modal_active');
   document.cookie = 'closed=true'
}

function getCookie(item) {
   const pairs = document.cookie.split('; ');
   const cookie = pairs.find(el => el.startsWith(item + '='));
   if (cookie) {
      return cookie.slice(item.length + 1);
   }
}