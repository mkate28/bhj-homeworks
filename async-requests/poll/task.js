const poll = document.querySelector('.poll');
const title = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const pollStatistics = document.querySelector('#poll__statistics');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      const response = JSON.parse(xhr.response);
      const quiz = response['data'];
      title.innerText = quiz['title'];
      const answers = quiz['answers'];
      for (let answ of answers) {
         const btnHTML = `<button class="poll__answer">${answ}</button>`;
         pollAnswers.insertAdjacentHTML('beforeend', btnHTML);
      }

      pollAnswers.addEventListener('click', (e) => {
         alert('Спасибо, ваш голос засчитан!');

         let newXhr = new XMLHttpRequest();
         newXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
         newXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         let id = response['id'];
         let index = answers.findIndex(item => item === e.target.innerText);
         newXhr.send(`vote=${id}&answer=${index}`);

         newXhr.onload = () => {
            pollAnswers.remove();
            const res = JSON.parse(newXhr.response);
            const result = res['stat'];
            let value = 0;
            result.forEach(el => value += el.votes);
            for (let el of result) {
               let percent = ((el.votes / value) * 100).toFixed(2);
               statHTML =
               `<div class="stat__item">
                  <div class="answer__name">${el.answer}</div>
                  <div class="answer__vote">${percent}%</div>
               </div>`;
               pollStatistics.insertAdjacentHTML('beforeend', statHTML);
            }
         }
      })
   }
})
