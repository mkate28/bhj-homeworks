const form = document.getElementById('signin__form');
const btnIn = document.getElementById('signin__btn');
const btnOut = document.getElementById('logout__btn');
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');
const signForm = document.getElementById('signin');

btnIn.addEventListener('click', function(e) {
   e.preventDefault();
   const data = new FormData(form);
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
   xhr.responseType = 'json';
   xhr.send(data);
   xhr.onload = () => {
      const response = xhr.response;
      const userId = response['user_id'];
      console.log(userId);
      localStorage.setItem('id', userId);
      if (response['success']) {
         signForm.classList.remove('signin_active');
         welcome.classList.add('welcome_active');
         if (localStorage.getItem('id')) {
            id.textContent = userId;
         }
      } else {
         alert('Неверный логин/пароль');
      }
      form.reset();
   }
})

btnOut.addEventListener('click', () => {
   welcome.classList.remove('welcome_active');
   signForm.classList.add('signin_active');
}) 