const cookie = document.querySelector('#cookie'),
      clickCounter = document.querySelector('#clicker__counter'),
      speedCounter = document.querySelector('#speed__counter');
let currentTime = new Date().getTime();

cookie.onclick = function() {
	let counter = +clickCounter.textContent;
	clickCounter.textContent = counter + 1;
	counter++;
	changeSize();
	
	let newTime = new Date().getTime();
	let period = (newTime - currentTime) / 1000;
	currentTime = newTime;
	let speed = Number((1 / period).toFixed(2));
	speedCounter.textContent = speed;
}

function changeSize() {
	if (cookie.width === 200) {
		cookie.width = 240;
	} else {
		cookie.width = 200;
	}
}