const textarea = document.getElementById('editor');
const reset = document.getElementById('reset');

if (localStorage.getItem('text')) {
   textarea.value = localStorage.getItem('text');
}

textarea.onchange = () => {
   saveText(textarea.value);
}

reset.onclick = () => {
   textarea.value = '';
   saveText(textarea.value);
}

function saveText(value) {
   localStorage.setItem('text', value);
}