const timer = document.getElementById('timer');
let time = 59;
const timeValue = (time) => timer.innerHTML = `00:00:${time}`;
timeValue(time);

const timerId = setInterval(() => {
	let value = time;
	if (value > 0) {
		time = value - 1; 
		if (time < 10) {
			time = `0${time}`;
		}
		timeValue(time);
	} else {
		clearInterval(timerId);
		alert('Вы победили в конкурсе');
		location = 'https://www.google.com/';
	}
}, 1000);