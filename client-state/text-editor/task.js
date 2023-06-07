const textarea = document.getElementById('editor');
const reset = document.getElementById('reset');

textarea.value = localStorage.getItem('text');
textarea.addEventListener('input', () => {
   saveText(textarea.value);
})

reset.onclick = () => {
   textarea.value = '';
   saveText(textarea.value);
}

function saveText(value) {
   localStorage.setItem('text', value);
}