document.addEventListener("keydown", keybinds);

const blackjack = document.getElementById("blackjack");
const chipsCounter = document.getElementById("chipsCounter");
const exitBlackjack = document.getElementById("exitBlackjack");
const blackjackChipsDisplay = document.getElementById("blackjackChipsDisplay");
const blackjackBetScreen = document.getElementById("blackjackBetScreen");
const blackjackBetChipsDisplay = document.getElementById("blackjackBetChipsDisplay");
const blackjackBetDisplay = document.getElementById("blackjackBetDisplay");
const blackjackPlay = document.getElementById("blackjackPlay");
const blackjackClearBet = document.getElementById("blackjackClearBet");
const blackjackMinusBet = document.getElementById("blackjackMinusBet");
const blackjackBet50 = document.getElementById("blackjackBet50");
const blackjackBet100 = document.getElementById("blackjackBet100");
const blackjackBet500 = document.getElementById("blackjackBet500");
const blackjackBet1k = document.getElementById("blackjackBet1k");
const blackjackBet5k = document.getElementById("blackjackBet5k");
const blackjackBet10k = document.getElementById("blackjackBet10k");

let temp;
let chips = chipsCounter.innerText;
let betAmount = 0;

function keybinds(event) {
	if (event.key === "Escape" && exitBlackjack.style.display == "flex") {
		event.preventDefault();
		clearBet();
	}
};

function checkBetAmount(betAmountCheck) {
	temp = chips - betAmount - betAmountCheck;
	if (temp >= 0) {
		return true;
	} else {
		return false;
	}
};

function updateBetDisplay() {
	if (betAmount >= 1000 && betAmount < 1000000) {
		temp = (betAmount / 1000).toFixed(1);
		blackjackBetDisplay.innerText = temp + "k$";
	} else if (betAmount >= 1000000 && betAmount < 1000000000) {
		temp = (betAmount / 1000000).toFixed(1);
		blackjackBetDisplay.innerText = temp + "M$";
	} else if (betAmount >= 1000000000 && betAmount < 1000000000000) {
		temp = (betAmount / 1000000000).toFixed(1);
		blackjackBetDisplay.innerText = temp + "B$";
	} else {
		blackjackBetDisplay.innerText = betAmount + "$";
	}
};

exitBlackjack.addEventListener("click", function() {
	clearBet();
});

blackjackClearBet.addEventListener("click", function() {
	clearBet();
});

blackjackMinusBet.addEventListener("click", function() {
	if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") < 28) {
		betAmount -= 50;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") < 28) {
		betAmount -= 100;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") < 28) {
		betAmount -= 500;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") < 28) {
		betAmount -= 1000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") < 28) {
		betAmount -= 5000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 28) {
		betAmount -= 10000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
		if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(1)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == false) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(8);
		} else if ((Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == false) || (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == false && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(5)) == true)) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(9);
		} else if (Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(2)) == true && Number.isInteger(blackjackBetChipsDisplay.style.backgroundPosition.charAt(6)) == true) {
			blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(10);
		}
	}
});

function clearBet() {
	blackjackBetChipsDisplay.style.backgroundImage = "";
	blackjackBetChipsDisplay.style.backgroundPosition = "";
	betAmount = 0;
	updateBetDisplay();
};

blackjackBet50.addEventListener("click", function() {
	if (checkBetAmount(50) == true) {
		betAmount += 50;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/50.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/50.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});

blackjackBet100.addEventListener("click", function() {
	if (checkBetAmount(100) == true) {
		betAmount += 100;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/100.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/100.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});

blackjackBet500.addEventListener("click", function() {
	if (checkBetAmount(500) == true) {
		betAmount += 500;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/500.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/500.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});

blackjackBet1k.addEventListener("click", function() {
	if (checkBetAmount(1000) == true) {
		betAmount += 1000;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/1k.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/1k.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});

blackjackBet5k.addEventListener("click", function() {
	if (checkBetAmount(5000) == true) {
		betAmount += 5000;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/5k.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/5k.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});

blackjackBet10k.addEventListener("click", function() {
	if (checkBetAmount(10000) == true) {
		betAmount += 10000;
		updateBetDisplay();
		let x = Math.floor(Math.random() * 26);
		let y = Math.floor(Math.random() * 26);
		if (blackjackBetChipsDisplay.style.backgroundPosition == "") {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px";
		} else {
			blackjackBetChipsDisplay.style.backgroundPosition = x + "px " + y + "px, " + blackjackBetChipsDisplay.style.backgroundPosition;
		}
		if (blackjackBetChipsDisplay.style.backgroundImage == "") {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/10k.png')";
		} else {
			blackjackBetChipsDisplay.style.backgroundImage = "url('assets/chips/10k.png'), " + blackjackBetChipsDisplay.style.backgroundImage;
		}
	}
});
