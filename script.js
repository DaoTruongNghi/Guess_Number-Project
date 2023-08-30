'use strict';

//DOM
// document.querySelector('.message').textContent = 'Correct Number 🎊';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Handling Click Events
//dùng addEvenListener('Click', Hàm thực thi sau cú click)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};
document.querySelector('.btncheck').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	console.log(guess, typeof guess);
	//when there is no input
	if (!guess) {
		displayMessage('No Number 😾');
		//When player wins
	} else if (guess === secretNumber) {
		displayMessage('Correct Number 🎊');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.guess').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '300px';
		document.querySelector('.number').textContent = secretNumber;

		//condition for save highscore when players wins
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
		//When guess is wrong = sum two condition in one(when guess to high & when guess to low)
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// document.querySelector('.message').textContent =
			// 	guess > secretNumber ? 'To High 📈' : 'To Low 📉';
			displayMessage(guess > secretNumber ? 'To High 📈' : 'To Low 📉');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			// document.querySelector('.message').textContent = '🕹 You lost the game';
			displayMessage('🕹 You lost the game');
			document.querySelector('.score').textContent = 0;
		}
	}
	// 	//When guess is to high
	//  else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = 'To High 📈';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '🕹 You lost the game';
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// 	//When guess is to low
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = 'To Low 📉';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '🕹 You lost the game';
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// document.querySelector('.message').textContent = 'To Low 📉';
	// score--;
	// document.querySelector('.score').textContent = score;
	// }
});

document.querySelector('.btnagain').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage('Start Guessing...');
	// document.querySelector('.message').textContent = 'Start Guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.guess').style.backgroundColor = '#222';

	document.querySelector('.number').style.width = '200px';
});
