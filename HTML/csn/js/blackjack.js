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
let cards = new Map ([
	["2h", 6],
	["3h", 6],
	["4h", 6],
	["5h", 6],
	["6h", 6],
	["7h", 6],
	["8h", 6],
	["9h", 6],
	["10h", 6],
	["jh", 6],
	["qh", 6],
	["kh", 6],
	["ah", 6],
	["2d", 6],
	["3d", 6],
	["4d", 6],
	["5d", 6],
	["6d", 6],
	["7d", 6],
	["8d", 6],
	["9d", 6],
	["10d", 6],
	["jd", 6],
	["qd", 6],
	["kd", 6],
	["ad", 6],
	["2c", 6],
	["3c", 6],
	["4c", 6],
	["5c", 6],
	["6c", 6],
	["7c", 6],
	["8c", 6],
	["9c", 6],
	["10c", 6],
	["jc", 6],
	["qc", 6],
	["kc", 6],
	["ac", 6],
	["2s", 6],
	["3s", 6],
	["4s", 6],
	["5s", 6],
	["6s", 6],
	["7s", 6],
	["8s", 6],
	["9s", 6],
	["10s", 6],
	["js", 6],
	["qs", 6],
	["ks", 6],
	["as", 6]
]);
let card;
let cardDealer;
let cardsAmount;
let shuffleCard;
let hasPlayed = false;
let playerOnCard;
let dealerOnCard;
let cardSplit1;
let cardSplit2;

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

function getCard(num) {
	switch (num) {
		case 1:
			return "2h";
			break;
		case 2:
			return "3h";
			break;
		case 3:
			return "4h";
			break;
		case 4:
			return "5h";
			break;
		case 5:
			return "6h";
			break;
		case 6:
			return "7h";
			break;
		case 7:
			return "8h";
			break;
		case 8:
			return "9h";
			break;
		case 9:
			return "10h";
			break;
		case 10:
			return "jh";
			break;
		case 11:
			return "qh";
			break;
		case 12:
			return "kh";
			break;
		case 13:
			return "ah";
			break;
		case 14:
			return "2d";
			break;
		case 15:
			return "3d";
			break;
		case 16:
			return "4d";
			break;
		case 17:
			return "5d";
			break;
		case 18:
			return "6d";
			break;
		case 19:
			return "7d";
			break;
		case 20:
			return "8d";
			break;
		case 21:
			return "9d";
			break;
		case 22:
			return "10d";
			break;
		case 23:
			return "jd";
			break;
		case 24:
			return "qd";
			break;
		case 25:
			return "kd";
			break;
		case 26:
			return "ad";
			break;
		case 27:
			return "2c";
			break;
		case 28:
			return "3c";
			break;
		case 29:
			return "4c";
			break;
		case 30:
			return "5c";
			break;
		case 31:
			return "6c";
			break;
		case 32:
			return "7c";
			break;
		case 33:
			return "8c";
			break;
		case 34:
			return "9c";
			break;
		case 35:
			return "10c";
			break;
		case 36:
			return "jc";
			break;
		case 37:
			return "qc";
			break;
		case 38:
			return "kc";
			break;
		case 39:
			return "ac";
			break;
		case 40:
			return "2s";
			break;
		case 41:
			return "3s";
			break;
		case 42:
			return "4s";
			break;
		case 43:
			return "5s";
			break;
		case 44:
			return "6s";
			break;
		case 45:
			return "7s";
			break;
		case 46:
			return "8s";
			break;
		case 47:
			return "9s";
			break;
		case 48:
			return "10s";
			break;
		case 49:
			return "js";
			break;
		case 50:
			return "qs";
			break;
		case 51:
			return "ks";
			break;
		case 52:
			return "as";
			break;
	}
};

function drawCard() {
	while (true) {
		card = Math.floor(Math.random() * 52) + 1;
		if (cards.get(getCard(card)) > 0) {
			temp = cards.get(getCard(card));
			cards.set(getCard(card), temp - 1)
			break;
		}
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

blackjackPlay.addEventListener("click", function() {
	if (betAmount >= 50) {
		chips -= betAmount;
		exitBlackjack.style.display = "none";
		blackjackBetScreen.style.display = "none";
		drawCard();
		
	}
});

blackjackClearBet.addEventListener("click", function() {
	clearBet();
});

blackjackMinusBet.addEventListener("click", function() {
	if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") < 28) {
		betAmount -= 50;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") < 28) {
		betAmount -= 100;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") < 28) {
		betAmount -= 500;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") < 28) {
		betAmount -= 1000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") < 28) {
		betAmount -= 5000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 28) {
		betAmount -= 10000;
		updateBetDisplay();
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	}
	if (blackjackBetChipsDisplay.style.backgroundPosition != "") {
		blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(blackjackBetChipsDisplay.style.backgroundPosition.indexOf(",") + 1);
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

blackjack.addEventListener("click", function() {
	if (hasPlayed == false) {
		shuffleCard = Math.floor(Math.random() * 36) + 45;
		cardsAmount = 312;
		hasPlayed = true;
	}
});
