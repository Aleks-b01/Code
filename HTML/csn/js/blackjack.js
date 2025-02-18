document.addEventListener("keydown", keybinds);

const blackjack = document.getElementById("blackjack");
const chipsCounter = document.getElementById("chipsCounter");
const chipsDisplay = document.getElementById("chipsDisplay");
const ChipsDisplay = document.getElementById("ChipsDisplay");
const exitBlackjack = document.getElementById("exitBlackjack");
const blackjackCurrentBet = document.getElementById("blackjackCurrentBet");
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
const blackjackCardsPlayer = document.getElementById("blackjackCardsPlayer");
const blackjackCardsDealer = document.getElementById("blackjackCardsDealer");
const blackjackPlayerValue = document.getElementById("blackjackPlayerValue");
const blackjackDealerValue = document.getElementById("blackjackDealerValue");
const blackjackPlayerValue1 = document.getElementById("blackjackPlayerValue1");
const blackjackHit = document.getElementById("blackjackHit");
const blackjackStand = document.getElementById("blackjackStand");
const blackjackDouble = document.getElementById("blackjackDouble");
const blackjackSplit = document.getElementById("blackjackSplit");

const cardValues = new Map([
	["2", 2],
	["3", 3],
	["4", 4],
	["5", 5],
	["6", 6],
	["7", 7],
	["8", 8],
	["9", 9],
	["1", 10],
	["j", 10],
	["q", 10],
	["k", 10],
	["a", 11],
]);
const cardsNum = new Map ([
	[1, "2h"],
	[2, "3h"],
	[3, "4h"],
	[4, "5h"],
	[5, "6h"],
	[6, "7h"],
	[7, "8h"],
	[8, "9h"],
	[9, "10h"],
	[10, "jh"],
	[11, "qh"],
	[12, "kh"],
	[13, "ah"],
	[14, "2d"],
	[15, "3d"],
	[16, "4d"],
	[17, "5d"],
	[18, "6d"],
	[19, "7d"],
	[20, "8d"],
	[21, "9d"],
	[22, "10d"],
	[23, "jd"],
	[24, "qd"],
	[25, "kd"],
	[26, "ad"],
	[27, "2c"],
	[28, "3c"],
	[29, "4c"],
	[30, "5c"],
	[31, "6c"],
	[32, "7c"],
	[33, "8c"],
	[34, "9c"],
	[35, "10c"],
	[36, "jc"],
	[37, "qc"],
	[38, "kc"],
	[39, "ac"],
	[40, "2s"],
	[41, "3s"],
	[42, "4s"],
	[43, "5s"],
	[44, "6s"],
	[45, "7s"],
	[46, "8s"],
	[47, "9s"],
	[48, "10s"],
	[49, "js"],
	[50, "qs"],
	[51, "ks"],
	[52, "as"]
]);
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
let temp;
let tempDealer;
let tempSplit;
let chips = chipsCounter.innerText;
let betAmount = 0;
let card;
let cardDealer;
let cardsAmount;
let shuffleCard;
let hasPlayed = false;
let playerCardOffset;
let dealerCardOffset;
let playerValue;
let dealerValue;
let playerValue1;
let playerAce = 0;
let dealerAce = 0;
let playerAce1 = 0;
let playerSplit = 0;

function keybinds(event) {
	if (event.key === "Escape" && exitBlackjack.style.display == "flex") {
		event.preventDefault();
		clearBet();
	}
};

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
};

// x == amount added to bet
function checkBetAmount(x) {
	temp = chips - betAmount - x;
	if (temp >= 0) {
		return true;
	} else {
		return false;
	}
};

// Card == current card, player: 0 == dealer, 1 == player, 2 == player 2nd split hand
function getValue(Card, player) {
	temp = cardsNum.get(Card).split("");
	if (temp[0] == "a" && player == 1) {
		playerAce += 1;
	} else if (temp[0] == "a" && player == 0) {
		dealerAce += 1;
	} else if (temp[0] == "a" && player == 2) {
		playerAce1 += 1;
	}
	return cardValues.get(temp[0]);
};

function drawCard() {
	while (true) {
		card = Math.floor(Math.random() * 52) + 1;
		if (cards.get(cardsNum.get(card)) > 0) {
			temp = cards.get(cardsNum.get(card));
			cards.set(cardsNum.get(card), temp - 1);
			break;
		}
	}
};

// x: 0 == BetDisplay, 1 == CurrentBet
function updateBet(x) {
	if (x == 0) {
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
	} else if (x == 1) {
		if (betAmount >= 1000 && betAmount < 1000000) {
			temp = (betAmount / 1000).toFixed(1);
			blackjackCurrentBet.innerText = "Bet: " + temp + "k$";
		} else if (betAmount >= 1000000 && betAmount < 1000000000) {
			temp = (betAmount / 1000000).toFixed(1);
			blackjackCurrentBet.innerText = "Bet: " + temp + "M$";
		} else if (betAmount >= 1000000000 && betAmount < 1000000000000) {
			temp = (betAmount / 1000000000).toFixed(1);
			blackjackCurrentBet.innerText = "Bet: " + temp + "B$";
		} else {
			blackjackCurrentBet.innerText = "Bet: " + betAmount + "$";
		}
	}
};

function clearBet() {
	blackjackBetChipsDisplay.style.backgroundImage = "";
	blackjackBetChipsDisplay.style.backgroundPosition = "";
	betAmount = 0;
	updateBet(0);
};

function updateChips() {
	if (chips >= 1000 && betAmount < 1000000) {
		temp = (chips / 1000).toFixed(1);
		chipsDisplay.innerText = temp + "k$";
	} else if (chips >= 1000000 && chips < 1000000000) {
		temp = (chips / 1000000).toFixed(1);
		chipsDisplay.innerText = temp + "M$";
	} else if (chips >= 1000000000 && chips < 1000000000000) {
		temp = (chips / 1000000000).toFixed(1);
		chipsDisplay.innerText = temp + "B$";
	} else {
		chipsDisplay.innerText = chips;
	}
};

function checkShuffle() {
	cardsAmount = 0
	for (let i of cards.values()) {
		cardsAmount += i;
	}
	cardsAmount /= 3.12;
	if (cardsAmount < shuffleCard) {
		for (let i = 52; i > 0; i--) {
			cards.set(getCard(i), 6);
		}
	}
};

function askInsurance() {
	console.log("this will ask for insurance");
};

function blackjackReset() {
	blackjackCardsPlayer.style.backgroundImage = "";
	blackjackCardsPlayer.style.backgroundPosition = "";
	blackjackCardsDealer.style.backgroundImage = "";
	blackjackCardsDealer.style.backgroundPosition = "";
	blackjackPlayerValue.innerText = "";
	blackjackDealerValue.innerText = "";
	blackjackPlayerValue1.innerText = "";
	blackjackPlayerValue.style.left = "50%";
	blackjackCurrentBet.innerText = "";
	playerValue = 0;
	dealerValue = 0;
	playerAce = 0;
	dealerAce = 0;
	playerAce1 = 0;
	playerSplit = 0;
	checkShuffle();
	blackjackBtns.style.display = "none";
	blackjackSplit.style.display = "none";
	blackjackDouble.style.display = "flex";
	blackjackBetScreen.style.display = "flex";
	updateChips();
	clearBet();
	chipsDisplay.style.display = "flex";
	ChipsDisplay.style.display = "flex";
	exitBlackjack.style.display = "flex";
};

blackjackPlay.addEventListener("click", function() {
	blackjackPlayFunc();
});

async function blackjackPlayFunc() {
	if (betAmount >= 50) {
		chips -= betAmount;
		chipsCounter.innerText = chips;
		exitBlackjack.style.display = "none";
		ChipsDisplay.style.display = "none";
		blackjackBetScreen.style.display = "none";
		updateBet(1);
		await sleep(600);
		drawCard();
		playerValue = getValue(card, 1);
		tempSplit = temp;
		blackjackCardsPlayer.style.backgroundImage = "url('assets/deck/" + cardsNum.get(card) + ".png')";
		blackjackCardsPlayer.style.backgroundPosition = "center";
		await sleep(1000);
		drawCard();
		dealerValue = getValue(card, 0);
		blackjackCardsDealer.style.backgroundImage = "url('assets/deck/" + cardsNum.get(card) + ".png')";
		blackjackCardsDealer.style.backgroundPosition = "center";
		tempDealer = blackjackCardsDealer.style.backgroundImage;
		await sleep(1000);
		drawCard();
		playerValue += getValue(card, 1);
		if (cardValues.get(tempSplit) == cardValues.get(temp[0])) {
			blackjackSplit.style.display = "flex";
		}
		blackjackCardsPlayer.style.backgroundImage += ", url('assets/deck/" + cardsNum.get(card) + ".png')";
		blackjackCardsPlayer.style.backgroundPosition += ", calc(50% - 44px)";
		await sleep(1000);
		drawCard();
		cardDealer = card;
		blackjackCardsDealer.style.backgroundImage += ", url('assets/deck/back-red.png')";
		blackjackCardsDealer.style.backgroundPosition += ", calc(50% - 44px)";
		await sleep(600);
		if (playerValue == 22) {
			playerValue -= 10;
			playerAce -= 1;
		}
		if (dealerValue == 11 && dealerValue == 10) {
			//animation for card sliding up and sleep
			if (dealerValue + getValue(cardDealer, 5) == 21) {
				if (playerValue == 21) {
					chips += betAmount;
					blackjackReset();
				} else {
					blackjackReset();
				}
			}
		}
		if (playerValue == 21) {
			chips += (betAmount * 2) + (betAmount / 2);
			blackjackReset();
		}
		blackjackPlayerValue.innerText = playerValue;
		blackjackDealerValue.innerText = dealerValue;
		playerCardOffset = 88;
		dealerCardOffset = 88;
		blackjackBtns.style.display = "flex";
	}
};

blackjackHit.addEventListener("click", function() {
	blackjackHitFunc(0);
});

// x: 0 == no double, 1 == double
async function blackjackHitFunc(x) {
	blackjackBtns.style.display =  "none";
	drawCard();
	blackjackCardsPlayer.style.backgroundPosition += ", calc(50% - " + playerCardOffset + "px)";
	playerCardOffset += 44;
	blackjackCardsPlayer.style.backgroundImage += ", url('assets/deck/" + cardsNum.get(card) + ".png')";
	playerValue += getValue(card, 1);
	if (playerValue > 21 && playerAce > 0) {
		playerValue -= 10;
		playerAce -= 1;
	}
	blackjackPlayerValue.innerText = playerValue;
	await sleep (600);
	if (playerValue > 21 && playerAce == 0) {
		x = 5;
		blackjackReset();
	}
	if (playerValue == 21) {
		x = 5;
		blackjackDealerPlay();
	}
	if (x == 1) {
		blackjackDealerPlay();
	} else if (x == 0) {
		blackjackSplit.style.display = "none";
		blackjackDouble.style.display = "none";
		blackjackBtns.style.display = "flex";
	}
};

blackjackStand.addEventListener("click", function() {
	blackjackDealerPlay();
});

async function blackjackDealerPlay() {
	blackjackBtns.style.display = "none";
	blackjackCardsDealer.style.backgroundImage = tempDealer + ", url('assets/deck/" + cardsNum.get(cardDealer) + ".png')";
	dealerValue += getValue(cardDealer, 0);
	blackjackDealerValue.innerText = dealerValue;
	for (let i = dealerValue; dealerValue < 17; i = i) {
		await sleep(1000);
		drawCard();
		blackjackCardsDealer.style.backgroundPosition += ", calc(50% - " + dealerCardOffset + "px)";
		blackjackCardsDealer.style.backgroundImage += ", url('assets/deck/" + cardsNum.get(card) + ".png')";
		dealerValue += getValue(card, 0);
		if (dealerValue > 21 && dealerAce > 0) {
			dealerValue -= 10;
			dealerAce -= 1;
		}
		i = dealerValue;
		blackjackDealerValue.innerText = dealerValue;
		dealerCardOffset += 44;
	}
	if (dealerValue >= 17 && dealerValue < 22) {
		if (dealerValue > playerValue) {
			await sleep(800);
			blackjackReset();
		} else if (dealerValue < playerValue) {
			await sleep(800);
			chips += betAmount * 2;
			blackjackReset();
		} else if (dealerValue == playerValue) {
			await sleep(800);
			chips += betAmount;
			blackjackReset();
		}
	}
	if (dealerValue > 21) {
		await sleep(800);
		chips += betAmount * 2;
		blackjackReset();
	}
};

blackjackDouble.addEventListener("click", function() {
	chips -= betAmount;
	betAmount *= 2;
	updateBet(1);
	blackjackHitFunc(1);
});

blackjackSplit.addEventListener("click", function() {
	blackjackSplitFunc();
});

async function blackjackSplitFunc() {
	blackjackBtns.style.display = "none";
	playerSplit = 1;
	blackjackCardsPlayer.style.backgroundPosition = "calc(50% + 200px), calc(50% - 200px)";
	blackjackPlayerValue.style.left = "calc(50% + 200px)";
	if (tempSplit != "a") {
		playerValue /= 2;
		playerValue1 = playerValue;
	} else {
		playerValue = 11;
		playerValue1 = 11;
		playerAce = 1;
		playerAce1 = 1;
	}
	blackjackPlayerValue.innerText = playerValue;
	blackjackPlayerValue1.innerText = playerValue;
	await sleep(1000);
	drawCard();
	blackjackCardsPlayer.style.backgroundPosition += ", calc(50% + 200px - 44px)";
	blackjackCardsPlayer.style.backgroundImage += ", url('assets/deck/" + cardsNum.get(card) + ".png')";
	playerValue += getValue(card, 1);
	if (playerValue == 22) {
		playerValue -= 10;
	}
	blackjackPlayerValue.innerText = playerValue;
	await sleep(1000);
	if (playerAce1 == 1) {
		drawCard();
		blackjackCardPlayer.style.backgroundPosition += ", calc(50% - 200px - 44px)";
		blackjackCardPlayer.style.backgroundImage += ", url('assets/deck/" + cardsNum.get(card) + ".png')";
		playerValue1 += getValue(card, 2);
		if (playerValue1 == 22) {
			playerValue1 -= 10;
		}
		blackjackDealerPlay();
	} else {
		blackjackSplit.style.display = "none";
		blackjackBtns.style.display = "flex";
	}
};

blackjackClearBet.addEventListener("click", function() {
	clearBet();
});

blackjackMinusBet.addEventListener("click", function() {
	if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("50.png") < 28) {
		betAmount -= 50;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("100.png") < 28) {
		betAmount -= 100;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("500.png") < 28) {
		betAmount -= 500;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("1k.png") < 28) {
		betAmount -= 1000;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("5k.png") < 28) {
		betAmount -= 5000;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(27);
	} else if (blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 0 && blackjackBetChipsDisplay.style.backgroundImage.indexOf("10k.png") > 28) {
		betAmount -= 10000;
		updateBet(0);
		blackjackBetChipsDisplay.style.backgroundImage = blackjackBetChipsDisplay.style.backgroundImage.slice(28);
	}
	if (blackjackBetChipsDisplay.style.backgroundPosition != "") {
		blackjackBetChipsDisplay.style.backgroundPosition = blackjackBetChipsDisplay.style.backgroundPosition.slice(blackjackBetChipsDisplay.style.backgroundPosition.indexOf(",") + 1);
	}
});

blackjackBet50.addEventListener("click", function() {
	if (checkBetAmount(50) == true) {
		betAmount += 50;
		updateBet(0);
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
		updateBet(0);
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
		updateBet(0);
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
		updateBet(0);
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
		updateBet(0);
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
		updateBet(0);
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
		shuffleCard = Math.floor(Math.random() * 38) + 9;
		hasPlayed = true;
	}
});

exitBlackjack.addEventListener("click", function() {
	chipsCounter.innerText = chips;
	clearBet();
});
