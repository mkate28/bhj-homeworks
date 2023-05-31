const widget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
let timeout;
// массив сообщений робота
const robotMessages = [
   'К сожалению, все опреаторы сейчас заняты. Не пишите нам больше',
   'Где ваша совесть?',
   'Мы ничего не будем вам продавать',
   'Вы не купили ни одного товара, чтобы с нами так разговаривать!',
   'Кто тут?',
   'Добрый день! До свидания!',
   'Добрый день, мы ещё не проснулись. Напишите через 10 лет'
]

// открываем виджет по нажатию
widget.onclick = () => {
   widget.classList.add('chat-widget_active');
   input.focus(); 
   robotQuestion(); 
}
   
// получаем случайное сообщение робота
function getRandomMessage() {
   let index = Math.floor(Math.random() * robotMessages.length);
   return robotMessages[index];
}

// получаем время сообщения
function getCurrentTime() {
   const currentTime = new Date().toLocaleTimeString('ru-RU').slice(0,5);
   return currentTime;
}

// сообщение робота
function sendRobotMessage() {
   messages.innerHTML += 
      `<div class="message">
         <div class="message__time">${getCurrentTime()}</div>
         <div class="message__text">${getRandomMessage()}</div>
      </div>`;
      robotQuestion(); 
}

// сообщение пользователя
function sendUserMessage() {
   const userMessage = input.value;
   messages.innerHTML += 
   `<div class="message message_client">
         <div class="message__time">${getCurrentTime()}</div>
         <div class="message__text">${userMessage}</div>
      </div>`;
}

// отправка сообщения пользователя, ответ робота
document.addEventListener('keyup', (event) => {
   if (event.key === 'Enter') {
      sendUserMessage();
      input.value = ''; 
      clearTimeout(timeout);
      console.log("отменяем таймер")
      sendRobotMessage();
      scrollMessages();
   } 
})

// вопрос от робота после 30с бездействия
function robotQuestion() {
   if (widget.classList.contains('chat-widget_active')) {
      console.log('ставим таймер')
      timeout = setTimeout(() => {
         messages.innerHTML += 
         `<div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">Вы еще здесь?</div>
         </div>`;
         console.log('Мы здесь')
         scrollMessages();
      }, 30000);
   }
}

// прокрутка сообщений вниз
function scrollMessages() {
   const allMessages = document.querySelectorAll('.message');
   allMessages[allMessages.length - 1].scrollIntoView({block: "center", behavior: "smooth"});
}