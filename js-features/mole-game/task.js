const holes = document.querySelectorAll('.hole');
const winInfo = document.getElementById(`dead`);;
const loseInfo = document.getElementById(`lost`);
let score = +winInfo.textContent;
let lost = +loseInfo.textContent;

for (let index = 1; index <= holes.length; index++) {
	const hole = document.getElementById(`hole${index}`);
	hole.addEventListener('click', function(event) {
		let classList = event.target.classList;
		if (classList.contains('hole_has-mole')) {
			score++;
			winInfo.textContent = score;
			if (score === 10) {
				alert('Победа!');
				restartGame();
			}
		} else {
			lost++;
			loseInfo.textContent = lost;
			if (lost === 5) {
				alert('Вы проиграли!');
				restartGame();
			}
		}
	})
}

function restartGame() {
	winInfo.textContent = 0;
	score = 0;
	loseInfo.textContent = 0;
	lost = 0;
}